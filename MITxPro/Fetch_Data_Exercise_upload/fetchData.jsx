// What I want to do is to create a way to search for pieces at the Metropolitan museum. Users use a search bar to find pieces. Pieces related to search are found and displayed on the screen in a grid manner. 

// Pagination, range and paginate all have to do with creating navigable pages.
const Pagination = ({ items, pageSize, onPageChange }) => {
  const { Button } = ReactBootstrap;
  if (items.length <= 0) return null;
  
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
  return Array(end - start + 1)
    .fill(0)
    .map((item, i) => start + i);
};

function paginate(items, pageNumber, pageSize) {
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
  return [state, setUrl];
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

// for every item in the array, get the object info from the website and then grab the image url.
// const fetchImage = (objectID) => {
//   axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
//   .then(response =>{
//     imgInfo
//     return response.data.primaryImageSmall;
//   })
//   .catch(err =>{
//     return ('Item not able to be shown');
//   });
// };

// const getAllImages = (allIDs=[]) => {
//   const allImages = allIDs.map((objectID) => {
//     fetchImage(objectID);
//   });
//   return allImages;
// }


// Show the image in a card format on webpage

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
  // const [objectData, setObjectData] = useState([]);

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

  useEffect(() =>{
    let didCancel = false;
    console.log('promise run')
    const fetchImgs = async () => {
      try{
        const imgResult = await Promise.allSettled(
          page.map((objectID)=> {
            axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
          })
        )
          console.log('imgRes', imgResult)
      } catch (error) {
        if (!didCancel) {
          console.log(error);
        }
      }
    };

    fetchImgs();
    return() => {
      didCancel = true
    };
  }, [page]);

  return (
    <Fragment>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {
          page.map((item) => (
            <li key={item}>{item}</li>  
          ))
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
