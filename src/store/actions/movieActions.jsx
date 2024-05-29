export { removemovie } from "../reducers/movieSlice";
import axios from "../../Utils/axios";
import { loadmovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data,
      similar: similar.data,
      translations: translations.data.translations.map((t)=>t.name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
    };

    dispatch(loadmovie(theultimatedetails));
    console.log(theultimatedetails);
  } catch (error) {
    console.log("Error: ", error);
  }
};
