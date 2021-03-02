//this google.js file is to implement all google app API and return the numbers per needed.
import { GOOGLE_API_KEY, GEOCODING_BASE } from "../constants";
import { Loader } from "@googlemaps/js-api-loader";

//Google API KEY:  AIzaSyB53y4-6k1lvgsORyVe1T28zH82VkpFmrA  feel free to use

export const getDistance = (origin, destination) => {
  const { lat1, lng1 } = getLatAndLong(origin).results.geometry.location;
  const { lat2, lng2 } = getLatAndLong(destination).results.geometry.location;
  return getDistance2(lat1, lng1, lat2, lng2);
};

export const getRoute = (origin, destination) => {
  const originLatAndLong = getLatAndLong(origin);
  const destLatAndLong = getLatAndLong(destination);
  return 2;
};

//This is a function used to convert address to latitude & longitude.
//可以测试这个url，是能够拿到json数据的。
//https://maps.googleapis.com/maps/api/geocode/json?address=765+hampden+ave,+saint+paul,+MN&key=AIzaSyB53y4-6k1lvgsORyVe1T28zH82VkpFmrA

export const getLatAndLong = address => {
  //这里应该对传入的address参数进行parse，例如address="765 Hampden Ave，Saint Paul, MN"
  //应该parse成-> "unit=765"，"streetName=Hampden"，"streetType=Ave"，"cityName1=Saint"，"cityName2=Paul"，"state=MN"
  //为了run代码，这一段先comment掉了。等实现了address的parsing问题再加回来
  // const url = `${GEOCODING_BASE}/${unit}+${streetName}+${streetType},+${cityName1}+${cityName2},+${state}&key=${GOOGLE_API_KEY}`;
  // return fetch(url, {
  //   method: 'GET',
  //   redirect: 'follow'
  // })
  //     .then(response => {
  //       console.log("Google api response.data", response.data)//拿到所有的results
  //       //这里应该对response拿回来的数据进行parse。
  //       //经纬度在results.geometry.location里面。
  //
  //     })
  //     .catch(error => {
  //       console.log('err in fetch google api response -> ', error);
  //     })
};

//This is the function to calculate distance between 2 pairs of coordinates on map.
function degreeToRadius(degree) {
  return (degree * Math.PI) / 180;
}

//由于地球是一个近乎标准的椭球体，所以我们以0度经线为基准，根据地球表面任意2点的经纬度就可以酸楚这两点间的地表距离。忽略误差
export const getDistance2 = (lat1, lng1, lat2, lng2) => {
  //lat为纬度, lng为经度, 一定不要弄错
  // const EARTH_MEAN_RADIUS_KM = 6371.009;//地球半径
  // const EARTH_MEAN_DIAMETER = EARTH_MEAN_RADIUS_KM * 2;//地球直径

  //计算纬度
  var radLat1 = degreeToRadius(lat1);
  var radLat2 = degreeToRadius(lat2);
  //计算经度
  var radLong1 = degreeToRadius(lng1);
  var radLong2 = degreeToRadius(lng2);
  var diffX = radLat1 - radLat2; //计算纬度差
  var diffY = radLong1 - radLong2; //计算经度差
  //计算正弦和余弦
  var hsinX = Math.sin(diffX * 0.5);
  var hsinY = Math.sin(diffY * 0.5);

  //计算方式1：
  // var latCenterRad_cos = Math.cos(lat1 * (Math.PI / 180));
  // var h = hsinX * hsinX + (latCenterRad_cos * Math.cos(radLat2) * hsinY * hsinY);
  // return (EARTH_MEAN_DIAMETER * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));

  //计算方式2：
  //var dis = 6378137 * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(diffX / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(diffY / 2), 2)));

  //计算方式3：
  var dis =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(hsinX, 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(hsinY, 2)
      )
    );
  return dis * 6378137;
};

export const calcRoute = (startLatLng, endLatLng) => {
  var request = {
    origin: startLatLng,
    destination: endLatLng,
    travelMode: "DRIVING",
  };
  directionsService.route(request, function (response, status) {
    if (status == "OK") {
      directionsRenderer.setDirections(response);
    }
  });
};
