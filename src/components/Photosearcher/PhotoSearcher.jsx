// import { element } from 'prop-types';
import { useEffect, useReducer, useState, useCallback } from 'react';



const clientId = '5OkE-wB0kEgc7Vfel4RexOvABKRZzfs6SvSdQ6eU2B4';
// action = {
//   type: "",
//   payLoad: "",
// }
function reducer(state, action) {
switch (action.type) {
  case "pageNext":
    return {
      ...state,
      page: state.page + 1,
    };
  case "pagePrev":
    return {
      ...state,
      page: state.page > 1 ? state.page - 1 : 1,
    };
  case "find":
    return {
      ...state,
      page: 1,
      find: action.payLoad,
    }

  default:
    return state;
}
}

const PhotoSearcher = () => {
  //   state = {
  //   page: 1,
  //   photos: [],
  //   find: 'office',
  // };
  const [photos, setPhotos] = useState([]);
  // const [params, setParams] = useState({ page: 1, find: "office" });
  const initialState = { page: 1, find: "office" }
  const[state,dispatch]=useReducer(reducer,initialState);
  const { find, page } = state;
  
 const onSubmit = event => {
    event.preventDefault();
    console.log('submit');
    // findImages();
  };
  const  SearchInput = event => {
    const find = event.currentTarget.value;
    //  this.setState({ find: find });
    dispatch({type: "find", payLoad: find})
  };

 const findImages = useCallback(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${find}&client_id=${clientId}`
    )
      .then(res => res.json())
      .then(response => {
        setPhotos(response.results.map(element => element.urls.small))
        // this.setState({
        //   photos: response.results.map(element => element.urls.small),
        // });
      });
  }, [page, find]);
 

  useEffect(() => {
    const ID = setTimeout(() => {
    findImages();
  }, 1000);
    // return () => {
    //   second;
    // };
    return (
      () => {
        clearTimeout(ID)
      }
    )
  }, [findImages]);
  
  return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={find}
            type="text"
            placeholder="Text your request"
            onChange={SearchInput}
          />
          <button type="submit">search</button>
        </form>
        <ul>
          {photos.map(element => (
            <li key={element}>
              <img src={element} alt="pic" width="350" height="400" />
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
          //   this.setState({
          //     page: page > 1 ? page - 1 : 1,
          //   })
          // }
            dispatch({
            type: "pagePrev"
          })
        }
          }
        >
          prev
        </button>
        <button
        onClick={() => {
          // this.setState({
          //   page: page + 1,
          // })
          dispatch({
            type: "pageNext"
          })
        }
          }
        >
          next
        </button>
      </div>
    );
}

export default PhotoSearcher;



// class PhotoSearcher extends Component {
//   state = {
//     page: 1,
//     photos: [],
//     find: 'office',
//   };
  
//   componentDidMount() {
//     this.findImages();
//   }
//   componentDidUpdate(_, prevState) {
//     if (prevState.page !== this.state.page) {
//       this.findImages();
//     }
//   }

//   SearchInput = event => {
//     const find = event.currentTarget.value;
//     this.setState({ find: find });
//   };
//   onSubmit = event => {
//     event.preventDefault();
//     console.log('submit');
//     this.findImages();
//   };
//   findImages = () => {
//     fetch(
//       `https://api.unsplash.com/search/photos?page=${this.state.page}&query=${this.state.find}&client_id=${clientId}`
//     )
//       .then(res => res.json())
//       .then(response => {
//         this.setState({
//           photos: response.results.map(element => element.urls.small),
//         });
//       });
//   };

//   render() {
//     const { photos, find, page } = this.state;

//     const { SearchInput, onSubmit } = this;

//     return (
//       <div>
//         <form onSubmit={onSubmit}>
//           <input
//             value={find}
//             type="text"
//             placeholder="Text your request"
//             onChange={SearchInput}
//           />
//           <button type="submit">search</button>
//         </form>
//         <ul>
//           {photos.map(element => (
//             <li key={element}>
//               <img src={element} alt="pic" width="350" height="400" />
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={() =>
//             this.setState({
//               page: page > 1 ? page - 1 : 1,
//             })
//           }
//         >
//           prev
//         </button>
//         <button
//           onClick={() =>
//             this.setState({
//               page: page + 1,
//             })
//           }
//         >
//           next
//         </button>
//       </div>
//     );
//   }
// }

// export default PhotoSearcher;
