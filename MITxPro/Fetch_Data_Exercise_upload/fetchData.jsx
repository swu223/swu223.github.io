// What I want to do is to create a way to search for pieces at the Metropolitan museum. Users use a search bar to find pieces. Pieces related to search are found and displayed on the screen in a grid manner. 

// Pagination, range and paginate all have to do with creating navigable pages.
const Pagination = ({ items, pageSize, onPageChange }) => {
  const { Button } = ReactBootstrap;
  if (items.length <= 0) return null;
  console.log('pagination run');
  //find out how many pages you need
  let num = Math.ceil(items.length / pageSize);
  let pages = range(1, num + 1);
  //create the number of pages
  const list = pages.map(page => {
    return (
      <Button key={page} onClick={onPageChange} className="page-item">
        {page}
      </Button>
    );
  });
  return(
    <nav>
      <ul className="pagination">{list}</ul>
    </nav>
  );
};

const range = (start, end) => {
  console.log('range calculated')
  return Array(end - start + 1)
    .fill(0)
    .map((item, i) => start + i);
};

function paginate(items, pageNumber, pageSize) {
  console.log('paginated pages')
  const start = (pageNumber - 1) * pageSize;
  let page = items.slice(start, start + pageSize);
  return page;
}

// The following code pulls information from the server.
const useDataApi = (initialUrl, initialData) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;
    console.log('dataapi fetch run')
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch( {type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  
  console.log('state',state);
  return [state, setUrl];
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      console.log('fetch init')
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      console.log('fetch success')
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      console.log('fetch failed')
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

// App that gets data from MET
function App() {
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers',
    { 
      objectIDs: [] 
    }
  );
  // const [{imgData, imgLoading, imgError},getImgData] = fetchImages([436524],{})
  const [imgData, setImgData] = useState([]);

  console.log('App function fired')

  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.textContent));
  };

  //data should be an object with 2 key pairs, total number of objects and an array of object IDs.
  let page = data.objectIDs;
  //groups search result into pages
  if (page.length >= 1) {
    page = paginate(page, currentPage, pageSize);
    console.log(`currentPage: ${currentPage}`);
    console.log('page', page)
  }
  
  {
    useEffect( ()=>{
      console.log('object data fetch started')
      let imgResult = [];
      let objectURLs = page.map((ID)=>`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ID}`);
    
      console.log('objectURLs', objectURLs);
      
      
      Promise.allSettled(objectURLs.map((url)=> axios.get(url)))
      .then(
        // results give an array of objects, status and values
        (results) => {
          imgResult = results.map((eachObject) => {
            if(eachObject.status === 'fulfilled'){return eachObject.value }
            else {return {error: 'object unavailable'}}
          })
          console.log('imgResult',imgResult)
          setImgData(imgResult)
        });
    
        }, [data, currentPage])

        console.log('imgData after useEffect', imgData);
  }
  

  return (
    <Fragment>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {
          imgData.map((item) => {
            if('data' in item){
              if(item.data.primaryImageSmall !== ""){
                return (
                  <li key={item.data.objectID}>
                  <a href={item.data.objectURL}>{item.data.title}
                  <img src={item.data.primaryImageSmall} width='200px'></img>
                  </a>
                  </li>)
              } else {
                return (
                  <li key={item.data.objectID}>
                  <a href={item.data.objectURL}>{item.data.title}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png" width='200px'></img>
                  </a>
                  </li>)
              }}
            else {return(<li key={item}>{item.error}</li>)}
          })
          }
        </div>
      )
    }

      <Pagination
        items={data.objectIDs}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      ></Pagination>
    </Fragment>
  );
}

// ========================================
ReactDOM.render(<App />, document.getElementById('root'));
