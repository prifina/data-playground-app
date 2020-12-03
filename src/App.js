import React, { useState } from "react";
import { Provider } from "react-redux";
import { Playground, store } from "graphql-playground-react";

import { Button } from "@chakra-ui/react";
// import App from './App'

const App = () => {
  const [endpoint, setEndpoint] = useState(
    "https://api-us-west-2.graphcms.com/v2/ckhkrkt47eyly01z12b702jo6/master"
  );
  return (
    <Provider store={store}>
      <Button
        colorScheme="teal"
        variantColor="teal"
        size="lg"
        onClick={() =>
          setEndpoint(
            "https://api-us-west-2.graphcms.com/v2/ckhkrkt47eyly01z12b702jo6/master"
          )
        }
      >
        PrivateAPI
      </Button>
      <Button
        onClick={() =>
          setEndpoint(
            "https://api-eu-central-1.graphcms.com/v2/cki904bpa0pq601xw42kuga3n/master"
          )
        }
      >
        PublicAPI
      </Button>

      <Playground endpoint={endpoint} />
    </Provider>
  );
};

export default App;

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Button
//         onClick={() =>
//           setEndpoint(
//             "https://api-us-west-2.graphcms.com/v2/ckhkrkt47eyly01z12b702jo6/master"
//           )
//         }
//       >
//         Public
//       </Button>
//       <Button
//         onClick={() =>
//           setEndpoint(
//             "https://api-eu-central-1.graphcms.com/v2/cki69jtzpa2mu01z2bvzr8ztf/master"
//           )
//         }
//       >
//         Private
//       </Button>

//       <Playground endpoint={endpoint} />
//     </Provider>
//   </React.StrictMode>,
//   rootElement
// );
