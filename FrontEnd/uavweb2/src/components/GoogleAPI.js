//this google.js file is to implement all google app API and return the numbers per needed.
import {GOOGLE_API_KEY, GEOCODING_BASE} from '../constants';

//Google API KEY:  AIzaSyB53y4-6k1lvgsORyVe1T28zH82VkpFmrA  feel free to use
export const getDistance = (origin, destination) => {
  return 1;
};

export const getRoute = (origin, destination) => {
  return 2;
};

//This is a function used to convert address to latitude & longitude.
export const getLatAndLong = (address) => {

//这里应该对传入的address参数进行parse，例如address="765 Hampden Ave，Saint Paul, MN"
//应该parse成-> "unit=765"，"streetName=Hampden"，"streetType=Ave"，"cityName1=Saint"，"cityName2=Paul"，"state=MN"
  const url = `${GEOCODING_BASE}/${unit}+${streetName}+${streetType},+${cityName1}+${cityName2},+${state}&key=${GOOGLE_API_KEY}`;
  return fetch(url, {
    method: 'GET',
    redirect: 'follow'
  })
      .then(response => {
        console.log("Google api response.data", response.data)//拿到所有的results
        //这里应该对response拿回来的数据进行parse。
        //经纬度在results.geometry.location里面。

      })
      .catch(error => {
        console.log('err in fetch google api response -> ', error);
      })
}