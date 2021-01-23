import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  SET_CURRENT_MEMBER,
  REMOVE_POST,
  REMOVE_MEMBER,
  UPDATE_POSTS,
  UPDATE_MEMBERS,
  UPDATE_LOCATION,
  UPDATE_DESTINATION,
  ADD_POST,
  ADD_MEMBER,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING,
  CLEARSTORAGE
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_POST:
    return {
      ...state,
      currentPost: action.post,
      loading: false
    };
  case SET_CURRENT_MEMBER:
    return {
      ...state,
      currentMember: action.member,
      loading: false
    };

  case UPDATE_POSTS:
    return {
      ...state,
      posts: [...action.posts],
      loading: false
    };
  case UPDATE_MEMBERS:
    return {
      ...state,
      members: [...action.members],
      loading: false
    };
  case UPDATE_LOCATION:
    return {
      ...state,
      currentLocation: action.location,
      loading: false
    };
  case UPDATE_DESTINATION:
    return {
      ...state,
      currentDestination: action.destination,
      loading: false
    };

  case ADD_POST:
    return {
      ...state,
      posts: [action.post, ...state.posts],
      loading: false
    };
  case ADD_MEMBER:
    return {
      ...state,
      members: [action.member, ...state.members],
      loading: false
    };

  case REMOVE_POST:
    return {
      ...state,
      posts: state.posts.filter((post) => {
        return post._id !== action._id; 
      })
    };
  case REMOVE_MEMBER:
    return {
      ...state,
      members: state.members.filter((member) => {
        return member._id !== action._id; 
      })
    };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.post, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...state.favorites],
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((post) => {
        return post._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

    case CLEARSTORAGE:
      return {
        posts: [],
        currentPost: {
          _id: 0,
          event: "",
          description: "",
          organizer: "",
          location: "",
          startTime: "",
          endTime: ""
        },
        members: [],
        currentMember: {
          _id: 0,
          firstname: "",
          lastname: "",
          email: "",
          password: ""
    
        },
        favorites: [],
        loading: false,
      
      
        locations: [],
        currentLocation: {
          lat: 0,
          lng: 0
        },
      
        destinations: [],
        currentDestination: {
          lat: 0,
          lng: 0
        }
        
      }

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      event: "",
      description: "",
      organizer: "",
      location: "",
      startTime: "",
      endTime: ""
    },
    members: [],
    currentMember: {
      _id: 0,
      firstname: "",
      lastname: "",
      email: "",
      password: ""

    },
    favorites: [],
    loading: false,
  
  
    locations: [],
    currentLocation: {
      lat: 0,
      lng: 0
    },
  
    destinations: [],
    currentDestination: {
      lat: 0,
      lng: 0
    }
    
  }

  
  );

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
