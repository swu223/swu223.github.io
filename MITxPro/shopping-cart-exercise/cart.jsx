// simulate getting products from DataBase
const products = [
  { name: "Apples", country: "Italy", cost: 3, instock: 10 },
  { name: "Oranges", country: "Spain", cost: 4, instock: 3 },
  { name: "Beans", country: "USA", cost: 2, instock: 5 },
  { name: "Cabbage", country: "USA", cost: 1, instock: 8 },
];
//=========Cart=============
const Cart = (props) => {
  const { Card, Accordion, Button } = ReactBootstrap;
  let data = props.location.data ? props.location.data : products;
  console.log(`data:${JSON.stringify(data)}`);

  return <Accordion defaultActiveKey="0">{list}</Accordion>;
};

//=======get Data from strapi=============
const useDataApi = (initialUrl, initialData) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  console.log(`useDataApi called`);
  useEffect(() => {
    console.log("useEffect Called");
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        console.log("FETCH FROM URl");
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
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
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

//========Products to show product list, cart and checkout=========
const Products = (props) => {
  const [items, setItems] = React.useState(products);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const {
    Card,
    Accordion,
    Button,
    Container,
    Row,
    Col,
    Image,
    Input,
  } = ReactBootstrap;
  //  Fetch Data
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("http://localhost:1337/api/products");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "http://localhost:1337/api/products",
    {
      data: [],
    }
  );
  console.log(`Rendering Products ${JSON.stringify(data)}`);
  
  // functions for buttons
  const addToCart = (e) => {
    let name = e.target.name;
    let item = items.filter((item) => item.name == name);
      //change items such that it reflects decrease in stock
    item[0].instock -= 1;
    console.log(`add to Cart ${JSON.stringify(item)}`);
    setCart([...cart, ...item]);
    //doFetch(query);
  };

  const deleteCartItem = (index) => {
    //add stock back into stock
    cart[index].instock += 1;
    //update the cart
    let newCart = cart.filter((item, i) => index != i);
    setCart(newCart);
  };

  const photos = ["./images/apple.png", "./images/orange.png", "./images/beans.png", "./images/cabbage.png"];

  // Product List
  let list = items.map((item, index) => {
    //let n = index + 1049;
    //let url = "https://picsum.photos/id/" + n + "/50/50";

    return (
      <li key={index}>
        <Image src={photos[index % 4]} width={70} roundedCircle></Image>
        <Button variant="primary" size="large">
          {item.name}:{item.cost}
        </Button>
        <div> Only {item.instock} left in stock. </div>
        <input name={item.name} type="submit" onClick={addToCart}></input>
      </li>
    );
  });

  // Cart List
  let cartList = cart.map((item, index) => {
    return (
      <Accordion.Item key={1+index} eventkey={1 + index}>
      <Accordion.Header>
        {item.name}
      </Accordion.Header>
      <Accordion.Body onClick={() => deleteCartItem(index)}
        eventkey={1 + index}>
        $ {item.cost} from {item.country}
      </Accordion.Body>
    </Accordion.Item>
    );
  });

  // Checkout Amount
  let finalList = () => {
    let total = checkOutTotal();
    let final = cart.map((item, index) => {
      return (
        <div key={index} index={index}>
          {item.name}
        </div>
      );
    });
    return { final, total };
  };

  const checkOutTotal = () => {
    let costs = cart.map((item) => item.cost);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    console.log(`total updated to ${newTotal}`);
    return newTotal;
  };

  const checkOut = () => {
    // future implement: bring user to checkout page
    alert(`Your total will be: $${finalList().total}`)
    setCart([]);
  };
  
  // TODO: implement the restockProducts function
  const restockProducts = (url) => {    
    doFetch(url);
    console.log('data from restock:', data)
    
    let newItems = data.data.map((item) => {
      let { name, country, cost, instock} = item.attributes;
      return { name, country, cost, instock};
    })
    
    console.log('newItems:', newItems);
    
    let restockedItems = newItems.map((newItem) => {
      let nameMatched             = [];
      let countryNameMatched      = [];
      let costCountryNameMatched  = [];
      
      nameMatched = items.filter((item) => {
        return item.name == newItem.name
      })
      
      if (nameMatched.length > 0) {
        countryNameMatched = items.filter((item) =>{
          return newItem.country == item.country;
        })
      } else {
        return newItem;
      }

      if (countryNameMatched.length > 0) {
        costCountryNameMatched = items.filter((item) =>{
          return newItem.cost === item.cost;
        })
      } else {
        return newItem;
      }
      
      if (costCountryNameMatched.length > 0) {
        newItem.instock = costCountryNameMatched[0].instock + newItem.instock;
        return newItem;
      } else {
        return newItem;
      }
    })

    setItems(restockedItems);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Product List</h1>
          <ul style={{ listStyleType: "none" }} className="d-grid gap-2">{list}</ul>
        </Col>
        <Col>
          <h1>Cart Contents</h1>
          <Accordion defaultActiveKey="0">{cartList}</Accordion>
        </Col>
        <Col>
          <h1>CheckOut </h1>
          <Button onClick={checkOut}>CheckOut $ {finalList().total}</Button>
          <div> {finalList().total > 0 && finalList().final} </div>
        </Col>
      </Row>
      <Row>
        <form
          onSubmit={(event) => {
            restockProducts(query);
            console.log(`Restock called on ${query}`);
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">ReStock Products</button>
        </form>
      </Row>
    </Container>
  );
};
// ========================================
ReactDOM.render(<Products />, document.getElementById("root"));
