(() => {
    const URL = 'https://api.spaceXdata.com/v3/launches?limit=100';
    const body = document.getElementById('target');

    console.log('script start');
    loadData();

    function loadData(){
        fetch(URL).then(resp => {
            resp.json().then(result => {
                console.log('data loaded', result);
                result.forEach((obj) => {
                    setTimeout(() => {
                        const item = document.createElement('div');
                        item.innerHTML = `
                            <img loading="lazy" src="${obj.links.mission_patch_small}" >
                            <div>
                                Mission Id: ${obj.mission_id}
                            </div>
                            <div>
                                Launch Year: ${obj.launch_year}
                            </div>
                            <div>
                                Successful Launch: ${obj.launch_success ? true : false}
                            </div>
                            <div>
                                Successful Landing: ${obj.launch_landing ? true : (obj.launch_landing !== false ? '---' : false)}
                            </div>
                        `;
                        body.appendChild(item);
                    }, 100)
                });
            });
        });
    }
})();