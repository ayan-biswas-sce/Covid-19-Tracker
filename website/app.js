const selectedCountry = document.querySelector(".selectedCountry").value;
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => {
        document.getElementById("confirm-int").innerHTML = JSON.stringify(data.Global.TotalConfirmed);
        document.getElementById("recover-int").innerHTML = JSON.stringify(data.Global.TotalRecovered);
        document.getElementById("deaths-int").innerHTML = JSON.stringify(data.Global.TotalDeaths);
        document.getElementById("recover-percent-int").innerHTML = Math.round(JSON.stringify((data.Global.TotalRecovered/data.Global.TotalConfirmed)*100))+"%";
        document.getElementById("death-percent-int").innerHTML = Math.round((data.Global.TotalDeaths/data.Global.TotalConfirmed)*100)+"%";
        document.getElementById("lastupdate").innerHTML = JSON.stringify(data.Date);
        data.Countries.forEach(m => {
            if(m.Country==selectedCountry){
                document.getElementById("confirm").innerHTML = JSON.stringify(m.TotalConfirmed);
                document.getElementById("recover").innerHTML = JSON.stringify(m.TotalRecovered);
                document.getElementById("deaths").innerHTML = JSON.stringify(m.TotalDeaths);
                document.getElementById("recover-percent").innerHTML = Math.round(JSON.stringify((m.TotalRecovered/m.TotalConfirmed)*100))+"%";
                document.getElementById("death-percent").innerHTML = Math.round((m.TotalDeaths/m.TotalConfirmed)*100)+"%";
            }
        });
    })
    document.getElementById("refresh").addEventListener("click", () => {
        fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => {
            document.getElementById("confirm-int").innerHTML = JSON.stringify(data.Global.TotalConfirmed);
            document.getElementById("recover-int").innerHTML = JSON.stringify(data.Global.TotalRecovered);
            document.getElementById("deaths-int").innerHTML = JSON.stringify(data.Global.TotalDeaths);
            document.getElementById("recover-percent-int").innerHTML = Math.round(JSON.stringify((data.Global.TotalRecovered/data.Global.TotalConfirmed)*100))+"%";
            document.getElementById("death-percent-int").innerHTML = Math.round((data.Global.TotalDeaths/data.Global.TotalConfirmed)*100)+"%";
            document.getElementById("lastupdate").innerHTML = JSON.stringify(data.Date);
    })})
    document.getElementById("refresh1").addEventListener("click", () => {
        let forkedCountry = document.querySelector(".selectedCountry").value;
        fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => {
        document.getElementById("confirm-int").innerHTML = JSON.stringify(data.Global.TotalConfirmed);
        document.getElementById("recover-int").innerHTML = JSON.stringify(data.Global.TotalRecovered);
        document.getElementById("deaths-int").innerHTML = JSON.stringify(data.Global.TotalDeaths);
        document.getElementById("recover-percent-int").innerHTML = Math.round(JSON.stringify((data.Global.TotalRecovered/data.Global.TotalConfirmed)*100))+"%";
        document.getElementById("death-percent-int").innerHTML = Math.round((data.Global.TotalDeaths/data.Global.TotalConfirmed)*100)+"%";
        document.getElementById("lastupdate").innerHTML = JSON.stringify(data.Date);
        data.Countries.forEach(m => {
            if(m.Country==forkedCountry){
                document.getElementById("confirm").innerHTML = JSON.stringify(m.TotalConfirmed);
                document.getElementById("recover").innerHTML = JSON.stringify(m.TotalRecovered);
                document.getElementById("deaths").innerHTML = JSON.stringify(m.TotalDeaths);
                document.getElementById("recover-percent").innerHTML = Math.round(JSON.stringify((m.TotalRecovered/m.TotalConfirmed)*100))+"%";
                document.getElementById("death-percent").innerHTML = Math.round((m.TotalDeaths/m.TotalConfirmed)*100)+"%";
            }
        });
    })
    })