const container = document.querySelector('.container')

fetch ('https://api.spacexdata.com/v3/capsules') // return response
// fetch calls is like function
.then(response => {
    console.log(response);
    return response.json(); // data that to return
})
.then(data => {
    // console.log(data);
    // const firstElement = data[0];
    // console.log(firstElement);
    // let capsuleID = firstElement.capsule_id;
    // console.log(capsuleID);
    // let capsuleDetail = firstElement.capsule_detail;
    // console.log(capsuleDetail);
    // let landings = firstElement.landings;
    // console.log(landings)

    for (let i = 0; i < data.length; i++){
        let eachCapsule = data[i];
        //console.log(eachCapsule);
        const obj = {
            capsuleID: eachCapsule.capsule_id, // dragon 1
            details: eachCapsule.details, // some sentence ..
            landings: eachCapsule.landings// 1
        }
        console.log(obj);

        const capsuleElement = document.createElement('p');
        capsuleElement.textContent = obj.capsuleID; //textContent allows to put in text 

        container.appendChild(capsuleElement);

    }

})