const viewCountry= document.querySelector(".view");

fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>{
   displayCountries(data);
})

const displayCountries=countries=>{
   const countriesDiv=document.getElementById('countries');
   countries.forEach(country => {
      
     const countryDiv=document.createElement('div');
     
     countryDiv.className='country';

const countryInfo=`
 <h3 class"country-name">${country.name.common}</h3>
 <h4>Official Name: ${country.name.official}</h4>
 <p>capital :  ${country.capital}</p>
 <button onclick="displayCountryDetail('${country.name.common}')" >details</button>
`


countryDiv.innerHTML=countryInfo;

countriesDiv.appendChild(countryDiv);


   });







//   for (let i = 0; i < countries.length; i++) {
//      const country =countries[i];
//      const countryDiv=document.createElement('div');
     
//      countryDiv.className='country';

// const countryInfo=`
//  <h3 class"country-name">${country.name.common}</h3>
//  <h4>Offical Name: ${country.name.official}</h4>
//  <p>capital :  ${country.capital}</p>
// `


// countryDiv.innerHTML=countryInfo;

// countriesDiv.appendChild(countryDiv);

     // const countryName=document.createElement('h3');
       // const capitalName=document.createElement('p');
      // countryName.innerText=country.name.common;
     // capitalName.innerText= "capital: " + country.capital;
      // countryDiv.appendChild(countryName);
       // countryDiv.appendChild(capitalName);
     
   //   ul.appendChild(li);
//      console.log(country.name);
     
//   }


}

 const displayCountryDetail=name=>{

   const url= `https://restcountries.com/v3.1/name/${name}`
   fetch(url)
   .then(res=>res.json)
   .then(data=>(
      renderCountryInfo(data[0])
   ));
};

const renderCountryInfo=country=>{
   console.log(country);
   const countryDiv= document.getElementById('countryDetail');
   // countryDiv.innerHTML=`
   // <h1>${country.name}</h1>
   // <p> population: ${country.population}</p>
   // <p> area: ${country.area}</p>
   // <img src="${country.flag}">
   // `
}