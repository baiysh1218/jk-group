import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom/dist";

export const pageContext = React.createContext();

const INIT_STATE = {
  company: [],
  teamAll: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMPANY":
      return { ...state, company: action.payload };
    case "GET_TEAM_INFO":
      return { ...state, teamAll: action.payload };
    default:
      return state;
  }
}

const API = "https://jk-group-production.up.railway.app";

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

  const value = {
    getCompanyAll,
    getTeamInfoAll,
    getOneCompany,

    oneCompany: companyOne,
    teamAll: state.teamAll,
    companyContent: state.company,
  };

  return <pageContext.Provider value={value}>{children}</pageContext.Provider>;
};

export default PageContextProvider;
