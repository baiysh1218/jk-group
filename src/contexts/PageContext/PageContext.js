import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom/dist";

export const pageContext = React.createContext();

const INIT_STATE = {
  company: [],
  teamAll: [],
  main: [],
  line: [],
  currentCompany: [],
  posts: [],
  postsAll: [],
  history: [],
  oneCompany: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMPANY":
      return { ...state, company: action.payload };
    case "GET_TEAM_INFO":
      return { ...state, teamAll: action.payload };
    case "GET_MAIN_CONTENT":
      return { ...state, main: action.payload };
    case "GET_LINE_CONTENT":
      return { ...state, line: action.payload };
    case "GET_CURRENT_COMPANY":
      return { ...state, currentCompany: action.payload };
    case "GET_POSTS":
      return { ...state, posts: action.payload };
    case "GET_FILTERED_POSTS":
      return { ...state, posts: action.payload };
    case "GET_CATEGORY":
      return { ...state, category: action.payload };
    case "POSTS_ALL":
      return { ...state, postsAll: action.payload };
    case "GET_HISTORY":
      return { ...state, history: action.payload };
    case "GET_ONE_COMPANY":
      return { ...state, oneCompany: action.payload };
    default:
      return state;
  }
}

const API = "http://jk-group-production.up.railway.app";

const PageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [companyOne, setCompanyOne] = useState(null);

  const navigate = useNavigate();

  async function getCompanyAll() {
    try {
      const result = await axios(`${API}/en/company/all/`);

      dispatch({
        type: "GET_COMPANY",
        payload: result.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getTeamInfoAll() {
    try {
      const result = await axios(`${API}/ru/team/all/`);

      dispatch({
        type: "GET_TEAM_INFO",
        payload: result.data.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  }

  function getOneCompany(item) {
    setCompanyOne(item);
    navigate(`/team/structure/${item.name}`);
  }

  const handleFiltered = clickedItem => {
    const filteredLines = state.line.filter(item => {
      return item.title == clickedItem.item;
    });
    dispatch({ type: "GET_CURRENT_COMPANY", payload: filteredLines });
  };

  console.log("CURRENT_COMPANY: ", state.currentCompany);

  async function getMainContent() {
    try {
      const result = await axios(`${API}/ru/main`);

      dispatch({ type: "GET_MAIN_CONTENT", payload: result.data.data.results });
    } catch (error) {
      console.error(error);
    }
  }

  async function getLine() {
    try {
      const result = await axios(`${API}/ru/line/all`);
      dispatch({ type: "GET_LINE_CONTENT", payload: result.data.results });
    } catch (error) {
      console.error(error);
    }
  }

  async function getPosts() {
    try {
      const result = await axios(`${API}/ru/posts/all`);

      const newUrl = window.location.pathname;
      window.history.pushState(null, null, newUrl);

      dispatch({ type: "GET_POSTS", payload: result.data.results });
      dispatch({ type: "POSTS_ALL", payload: result.data.results });

      const uniqueData = result.data.results.filter((item, index, arr) => {
        const firstIndex = arr.findIndex(obj => obj.category === item.category);
        return firstIndex === index;
      });
      dispatch({ type: "GET_CATEGORY", payload: uniqueData });
    } catch (error) {
      console.error(error);
    }
  }

  async function filteredPosts(category) {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("category", category);
      const queryParams = searchParams.toString();

      const result = await axios(`${API}/en/posts/all/?${queryParams}`);
      dispatch({ type: "GET_FILTERED_POSTS", payload: result.data.results });
    } catch (error) {
      console.error(error);
    }
  }

  async function getHistory() {
    try {
      const result = await axios(`${API}/ru/history/all/`);
      dispatch({ type: "GET_HISTORY", payload: result.data.results });
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneCompanyId(id) {
    try {
      const result = await axios(`${API}/line/${id}/`);

      dispatch({ type: "GET_ONE_COMPANY", payload: result.data.results });
    } catch (error) {
      console.error(error);
    }
  }

  const value = {
    getCompanyAll,
    getTeamInfoAll,
    getOneCompany,
    getMainContent,
    getLine,
    handleFiltered,
    getPosts,
    filteredPosts,
    getHistory,
    getOneCompanyId,

    oneCompany: companyOne,
    teamAll: state.teamAll,
    companyContent: state.company,
    line: state.line,
    main: state.main,
    currentCompany: state.currentCompany,
    posts: state.posts,
    category: state.category,
    postsAll: state.postsAll,
    history: state.history,
    oneCompany: state.oneCompany,
  };

  return <pageContext.Provider value={value}>{children}</pageContext.Provider>;
};

export default PageContextProvider;
