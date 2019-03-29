import React, { useState } from 'react';
import T from 'prop-types';
// import XMLHttpRequest from 'xmlhttprequest';


const myHeaders = new Headers();
myHeaders.append('Access-Control-Allow-Origin', '*');
myHeaders.append("Content-Type", "text/html");


export const List = () => {
  // const [list, setList] = useState([]);

  const getApi = () => {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (e) { console.log('change', e) };
    xhr.open("POST", "http://api.seasonvar.ru");
    xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function (e) { console.log('onload', e) };
    xhr.send({ 'key': "79fbec24", 'command': 'search', 'query': 'ss' });

    // const params = new FormData();
    // params.append('key', '79fbec24');
    // params.append('command', 'search');
    // params.append('query', 'ss');

    // fetch('http://api.seasonvar.ru/', {
    //   method: 'post',
    //   mode: 'no-cors',
    //   body: params
    // }).then((ret) => console.log(ret));

    // setList(count + 1);
  }

  getApi();

  return (
    <div>
      Hello world1
    </div>
  );
}

List.propTypes = {
  classes: T.objectOf(T.any)
}
