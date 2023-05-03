import React from "react";
import f3 from "family-chart";  // npm i family-chart
import './family-chart.css';  // create file 'family-chart.css' in same directory, copy/paste css from examples/create-tree

export default class FamilyTree extends React.Component {
  cont = React.createRef();

  componentDidMount() {
    if (!this.cont.current) return;
    
    const store = f3.createStore({
        data: data(),
        node_separation: 250,
        level_separation: 150
      }),
      view = f3.d3AnimationView({
        store,
        cont: document.querySelector("#FamilyChart")
      }),
      Card = f3.elements.Card({
        store,
        svg: view.svg,
        card_dim: {w:220,h:70,text_x:75,text_y:15,img_w:60,img_h:60,img_x:5,img_y:5},
        card_display: [d => `${d.data['first name'] || ''} ${d.data['last name'] || ''}`,d => `${d.data['birthday'] || ''}`],
        mini_tree: true,
        link_break: false
      })
  
    view.setCard(Card)
    store.setOnUpdate(props => view.update(props || {}))
    store.update.tree({initial: true})
    
    function data() {
      return [
  {
    "id": "0",
    "rels": {
      "spouses": [
        "d1831860-2879-45d2-aa75-72cd9a6cc0d2"
      ],
      "children": [
        "106751a1-5f14-442c-88ae-c3b56f3dcc36",
        "60632cfe-81ce-489f-9763-527e3f037a7f",
        "beb35fcc-581d-455e-adf0-ffca95b35b54",
        "1df5d5c6-46f1-488b-808e-8b97dde07019",
        "ef0db942-f2e3-49cb-9cdf-c59f36439823",
        "c10c4ffb-d5e3-496d-a9df-b4cf10d16868",
        "c378fc68-d5b9-4d3a-87db-f1c68b6a4332",
        "25c60375-7b07-4bd0-90e7-be5c1cdf6777"
      ]
    },
    "data": {
      "first name": "Veerappa",
      "last name": "Bangera",
      "birthday": "Malpe",
      "avatar": "",
      "gender": "M"
    }
  },
  {
    "id": "d1831860-2879-45d2-aa75-72cd9a6cc0d2",
    "data": {
      "gender": "F",
      "first name": "Sarasu",
      "last name": "Bangera",
      "birthday": "Malpe",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "0"
      ],
      "children": [
        "106751a1-5f14-442c-88ae-c3b56f3dcc36",
        "60632cfe-81ce-489f-9763-527e3f037a7f",
        "beb35fcc-581d-455e-adf0-ffca95b35b54",
        "1df5d5c6-46f1-488b-808e-8b97dde07019",
        "ef0db942-f2e3-49cb-9cdf-c59f36439823",
        "c10c4ffb-d5e3-496d-a9df-b4cf10d16868",
        "c378fc68-d5b9-4d3a-87db-f1c68b6a4332",
        "25c60375-7b07-4bd0-90e7-be5c1cdf6777"
      ]
    }
  },
  {
    "id": "106751a1-5f14-442c-88ae-c3b56f3dcc36",
    "data": {
      "gender": "M",
      "first name": "MK jagannath",
      "last name": "Kumar",
      "birthday": "Malpe",
      "avatar": require("./images/Mk Jagannath.png")
    },
    "rels": {
      "mother": "d1831860-2879-45d2-aa75-72cd9a6cc0d2",
      "father": "0",
      "spouses": [
        "7815323f-bbe5-4f72-969d-64e872cdceae"
      ],
      "children": [
        "f76be961-d164-487d-bc26-f84c55e8e32a",
        "2421c5e1-828f-4c2c-8006-06b9be62343d",
        "83af99a8-480b-410f-84e6-5a18f9348a4c",
        "a7b01191-de02-42a2-b5fb-f52a45a49e7b",
        "30ed80ea-3256-4316-9dcd-ed230427a2f7",
        "001eaa5b-1865-4ff9-8a41-1630a5f629d2"
      ]
    }
  },
  {
    "id": "60632cfe-81ce-489f-9763-527e3f037a7f",
    "data": {
      "gender": "M",
      "first name": "Sundardas",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "0",
      "mother": "d1831860-2879-45d2-aa75-72cd9a6cc0d2",
      "spouses": [
        "ebb61eff-56e5-42bc-880a-fc838645a01b"
      ],
      "children": [
        "ea75a1fc-fabf-4dfc-af75-22620aeaf08e",
        "bf856810-fd18-4337-83f2-9b20f4ae3c4d",
        "af23d8cf-d638-4c92-b6af-7c0716dc395f",
        "7f77635d-3936-470a-8593-0cd7b77ad9fe",
        "a2145a39-00df-4483-bccf-84d374269eb8",
        "53cee724-ca32-4130-acbf-fda47abf8539"
      ]
    }
  },
  {
    "id": "beb35fcc-581d-455e-adf0-ffca95b35b54",
    "data": {
      "gender": "M",
      "first name": "Surendra",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "0",
      "mother": "d1831860-2879-45d2-aa75-72cd9a6cc0d2",
      "spouses": [
        "9f8ffbca-003a-4b0f-82d0-5f153bd1479a"
      ],
      "children": [
        "4e121a86-4a7d-4c71-a057-43b4976fa13b",
        "e69d7798-e137-414b-8cbf-5ad8cdfae634",
        "8ba4a8b2-e4f9-4c69-a004-7b6cf05e0198"
      ]
    }
  },
  {
    "id": "1df5d5c6-46f1-488b-808e-8b97dde07019",
    "data": {
      "gender": "F",
      "first name": "Thejawati",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "0",
      "mother": "d1831860-2879-45d2-aa75-72cd9a6cc0d2",
      "spouses": [
        "5784a6cb-3643-46ce-bf62-2c0a239869ab"
      ],
      "children": [
        "e703cf72-6676-4fac-b097-cac9ef5d3d7d",
        "ae203a70-e36a-41de-91f6-e8d64a6e53c5",
        "ccc447cd-a30e-41d9-b6c5-09daed7a0387",
        "00bbbed0-2982-426d-a13a-df58daf62e99",
        "9820c658-85ca-4941-994b-7af62225b846",
        "f81e4277-9f85-462b-9bfa-ec9363e986d1",
        "f7ac4f25-2cc1-4bc1-930f-ca00fc4280c2"
      ]
    }
  },
  {
    "id": "ef0db942-f2e3-49cb-9cdf-c59f36439823",
    "data": {
      "gender": "F",
      "first name": "Leelawati",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "0",
      "mother": "d1831860-2879-45d2-aa75-72cd9a6cc0d2",
      "spouses": [
        "82bcfdf7-900c-40f3-b491-8b2bd0b88201"
      ],
      "children": [
        "54386327-1331-45cd-bacb-94dc9ff5dd52",
        "8bccb5a2-5739-4d6a-9386-cfd692a5c0d3",
        "0069a221-05f4-45d4-a45e-e5bd482924c6",
        "4b6bcbeb-1527-4b6a-bf89-0a103f25d0e8",
        "74a9818e-1572-4d06-bbb1-f9de0b68b294",
        "ab01c058-77f8-4625-9837-6b30e3985282"
      ]
    }
  },
  {
    "id": "c10c4ffb-d5e3-496d-a9df-b4cf10d16868",
    "data": {
      "gender": "F",
      "first name": "Raghavendra",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "0",
      "mother": "d1831860-2879-45d2-aa75-72cd9a6cc0d2"
    }
  },
  {
    "id": "c378fc68-d5b9-4d3a-87db-f1c68b6a4332",
    "data": {
      "gender": "M",
      "first name": "Kondandapani Malpe",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "0",
      "mother": "d1831860-2879-45d2-aa75-72cd9a6cc0d2",
      "spouses": [
        "cb1f73eb-fdef-4d97-80a2-520982516b10"
      ],
      "children": [
        "6c151983-9f32-4a90-947b-1ff8b48983f7"
      ]
    }
  },
  {
    "id": "22413a4d-3308-411e-bf2b-15cf000b2364",
    "data": {
      "gender": "F",
      "first name": "Prabha ",
      "last name": "S Kumar",
      "birthday": "Vasai,Mumbai",
      "avatar": require("./images/Prabha.png")
    },
    "rels": {
      "father": "63a63a6a-a14d-4fb8-a466-6ca92e9e8b69",
      "mother": "25c60375-7b07-4bd0-90e7-be5c1cdf6777",
      "spouses": [
        "e7679ad7-9dbe-4252-aad9-d796574fb2e4"
      ],
      "children": [
        "98941dbf-7b73-4fb6-a42a-7c5394e4c624",
        "8443ffe3-ecd7-48c4-83e0-96bd5db67d17"
      ]
    }
  },
  {
    "id": "63a63a6a-a14d-4fb8-a466-6ca92e9e8b69",
    "data": {
      "gender": "M",
      "first name": "GopalKrishna",
      "last name": "Mulki",
      "birthday": "Mulki,Karnataka",
      "avatar": require("./images/GopalKrishna.jpg")
    },
    "rels": {
      "children": [
        "22413a4d-3308-411e-bf2b-15cf000b2364",
        "dc4f71a3-daf2-417c-b7b1-db5c2a0b6c07",
        "9a23ba40-a9ea-4db7-b2db-3cf492615d7b",
        "f1be6a10-6ecb-4c8d-a77b-b7321b09a76d",
        "815db1a1-c1b3-466d-9fb5-5079956613ee"
      ],
      "spouses": [
        "25c60375-7b07-4bd0-90e7-be5c1cdf6777"
      ]
    }
  },
  {
    "id": "25c60375-7b07-4bd0-90e7-be5c1cdf6777",
    "data": {
      "gender": "F",
      "first name": "Gunavathi",
      "last name": "G Mulki",
      "birthday": "Mulki,Karnataka",
      "avatar": require("./images/Gunavathi.jpg")
    },
    "rels": {
      "father": "0",
      "mother": "d1831860-2879-45d2-aa75-72cd9a6cc0d2",
      "spouses": [
        "63a63a6a-a14d-4fb8-a466-6ca92e9e8b69"
      ],
      "children": [
        "22413a4d-3308-411e-bf2b-15cf000b2364",
        "dc4f71a3-daf2-417c-b7b1-db5c2a0b6c07",
        "9a23ba40-a9ea-4db7-b2db-3cf492615d7b",
        "f1be6a10-6ecb-4c8d-a77b-b7321b09a76d",
        "815db1a1-c1b3-466d-9fb5-5079956613ee"
      ]
    }
  },
  {
    "id": "dc4f71a3-daf2-417c-b7b1-db5c2a0b6c07",
    "data": {
      "gender": "F",
      "first name": "Jyothi ",
      "last name": "P Kumar",
      "birthday": "Bangalore,Karnataka",
      "avatar": require("./images/Jyoti.png")
    },
    "rels": {
      "father": "63a63a6a-a14d-4fb8-a466-6ca92e9e8b69",
      "mother": "25c60375-7b07-4bd0-90e7-be5c1cdf6777",
      "spouses": [
        "8eeb8706-6108-4e8e-ac0b-9c0fb287381a"
      ],
      "children": [
        "55028db6-1877-4e3a-981b-c0c2249b5bf1",
        "5a0d8e0f-19ee-47ed-bbd7-97ca8bc407a8"
      ]
    }
  },
  {
    "id": "9a23ba40-a9ea-4db7-b2db-3cf492615d7b",
    "data": {
      "gender": "M",
      "first name": "Uday ",
      "last name": "G Mulky",
      "birthday": "Andheri, Mumbai",
      "avatar": require("./images/Uday.jpg")
    },
    "rels": {
      "father": "63a63a6a-a14d-4fb8-a466-6ca92e9e8b69",
      "mother": "25c60375-7b07-4bd0-90e7-be5c1cdf6777",
      "spouses": [
        "2fc54c70-460b-4812-b27a-cb1b9a5b2c90"
      ],
      "children": [
        "77381d4c-a438-4b96-8c3a-e07fcdc9cb1a",
        "b785ea69-9de3-4a01-8b94-a91405faba79"
      ]
    }
  },
  {
    "id": "f1be6a10-6ecb-4c8d-a77b-b7321b09a76d",
    "data": {
      "gender": "F",
      "first name": "Divya",
      "last name": "G Poojary",
      "birthday": "Udupi,Karnataka",
      "avatar": require("./images/Divya.png")
    },
    "rels": {
      "father": "63a63a6a-a14d-4fb8-a466-6ca92e9e8b69",
      "mother": "25c60375-7b07-4bd0-90e7-be5c1cdf6777",
      "spouses": [
        "b52a9723-af23-4ac3-bfcf-681427c5d39b"
      ],
      "children": [
        "ba680d5a-a56b-4937-aba9-30d57de8d412",
        "b96317da-1f17-41cb-abb5-57052ca116f7"
      ]
    }
  },
  {
    "id": "815db1a1-c1b3-466d-9fb5-5079956613ee",
    "data": {
      "gender": "M",
      "first name": "Chandrabhanu",
      "last name": "G Mulki",
      "birthday": "Mulki,Karnataka",
      "avatar": require("./images/Chandrabhanu.jpg")
    },
    "rels": {
      "father": "63a63a6a-a14d-4fb8-a466-6ca92e9e8b69",
      "mother": "25c60375-7b07-4bd0-90e7-be5c1cdf6777",
      "spouses": [
        "ed471fcc-61c5-4a27-bf0b-3e8830a2a3c7"
      ],
      "children": [
        "84e510a8-a046-492d-b14f-5c759f476fef"
      ]
    }
  },
  {
    "id": "ed471fcc-61c5-4a27-bf0b-3e8830a2a3c7",
    "data": {
      "gender": "F",
      "first name": "Savitha",
      "last name": "C Mulki",
      "birthday": "Mulki,Karnataka",
      "avatar": require("./images/Savitha.jpg")
    },
    "rels": {
      "spouses": [
        "815db1a1-c1b3-466d-9fb5-5079956613ee"
      ],
      "children": [
        "84e510a8-a046-492d-b14f-5c759f476fef"
      ]
    }
  },
  {
    "id": "84e510a8-a046-492d-b14f-5c759f476fef",
    "data": {
      "gender": "M",
      "first name": "Ashutosh",
      "last name": "C Mulki",
      "birthday": "Mulki,Karnataka",
      "avatar": require("./images/Ashutosh.jpg")
    },
    "rels": {
      "mother": "ed471fcc-61c5-4a27-bf0b-3e8830a2a3c7",
      "father": "815db1a1-c1b3-466d-9fb5-5079956613ee"
    }
  },
  {
    "id": "b52a9723-af23-4ac3-bfcf-681427c5d39b",
    "data": {
      "gender": "M",
      "first name": "Gopal",
      "last name": "Poojary",
      "birthday": "Udupi,Karnataka",
      "avatar": require("./images/Gopal.png")
    },
    "rels": {
      "spouses": [
        "f1be6a10-6ecb-4c8d-a77b-b7321b09a76d"
      ],
      "children": [
        "ba680d5a-a56b-4937-aba9-30d57de8d412",
        "b96317da-1f17-41cb-abb5-57052ca116f7"
      ]
    }
  },
  {
    "id": "ba680d5a-a56b-4937-aba9-30d57de8d412",
    "data": {
      "gender": "F",
      "first name": "Sparsha",
      "last name": "P Poojary",
      "birthday": "Goregaon,Mumbai",
      "avatar": require("./images/Sparsha.png")
    },
    "rels": {
      "father": "b52a9723-af23-4ac3-bfcf-681427c5d39b",
      "mother": "f1be6a10-6ecb-4c8d-a77b-b7321b09a76d",
      "spouses": [
        "ac9c06bf-bff3-48b1-80c3-3f818b798564"
      ],
      "children": [
        "3d2639ac-f0f7-4b7f-94c9-e52b48fe31e0",
        "d74d539e-30f4-4840-a6fe-a45e237c5d10"
      ]
    }
  },
  {
    "id": "ac9c06bf-bff3-48b1-80c3-3f818b798564",
    "data": {
      "gender": "M",
      "first name": "Prashanth",
      "last name": "Poojary",
      "birthday": "Goregaon,Mumbai",
      "avatar": require("./images/Prashanth.jpg")
    },
    "rels": {
      "spouses": [
        "ba680d5a-a56b-4937-aba9-30d57de8d412"
      ],
      "children": [
        "3d2639ac-f0f7-4b7f-94c9-e52b48fe31e0",
        "d74d539e-30f4-4840-a6fe-a45e237c5d10"
      ]
    }
  },
  {
    "id": "3d2639ac-f0f7-4b7f-94c9-e52b48fe31e0",
    "data": {
      "gender": "F",
      "first name": "Prisha",
      "last name": "P Poojary",
      "birthday": "Goregaon,Mumbai",
      "avatar": require("./images/Prisha.jpg")
    },
    "rels": {
      "mother": "ba680d5a-a56b-4937-aba9-30d57de8d412",
      "father": "ac9c06bf-bff3-48b1-80c3-3f818b798564"
    }
  },
  {
    "id": "d74d539e-30f4-4840-a6fe-a45e237c5d10",
    "data": {
      "gender": "M",
      "first name": "Sphrihan ",
      "last name": "P Poojary",
      "birthday": "Goregaon,Mumbai",
      "avatar": require("./images/Sphrihan.png")
    },
    "rels": {
      "father": "ac9c06bf-bff3-48b1-80c3-3f818b798564",
      "mother": "ba680d5a-a56b-4937-aba9-30d57de8d412"
    }
  },
  {
    "id": "b96317da-1f17-41cb-abb5-57052ca116f7",
    "data": {
      "gender": "F",
      "first name": "Kshama ",
      "last name": "Poojary",
      "birthday": "Dubai ,UAE",
      "avatar": require("./images/Kshama.jpg")
    },
    "rels": {
      "mother": "f1be6a10-6ecb-4c8d-a77b-b7321b09a76d",
      "father": "b52a9723-af23-4ac3-bfcf-681427c5d39b"
    }
  },
  {
    "id": "e7679ad7-9dbe-4252-aad9-d796574fb2e4",
    "data": {
      "gender": "M",
      "first name": "Suresh ",
      "last name": "Kumar",
      "birthday": "Vasai,Mumbai",
      "avatar": require("./images/Suresh Kumar.png")
    },
    "rels": {
      "spouses": [
        "22413a4d-3308-411e-bf2b-15cf000b2364"
      ],
      "children": [
        "98941dbf-7b73-4fb6-a42a-7c5394e4c624",
        "8443ffe3-ecd7-48c4-83e0-96bd5db67d17"
      ]
    }
  },
  {
    "id": "98941dbf-7b73-4fb6-a42a-7c5394e4c624",
    "data": {
      "gender": "M",
      "first name": "Prajwal",
      "last name": "S Kumar",
      "birthday": "kandivali,Mumbai",
      "avatar": "https://media-exp1.licdn.com/dms/image/C5103AQH98Sqt6UbKbA/profile-displayphoto-shrink_200_200/0/1545222369888?e=2147483647&v=beta&t=ONLKPVLDk_mlG4Ub9-vsJplwXybD0mDWApx-1AIPK5U"
    },
    "rels": {
      "mother": "22413a4d-3308-411e-bf2b-15cf000b2364",
      "father": "e7679ad7-9dbe-4252-aad9-d796574fb2e4",
      "spouses": [
        "eb281d9e-2805-41e2-97ca-5ce4decd041e"
      ],
      "children": [
        "f3f0718f-66d5-4c8d-ace2-d2d20db64182"
      ]
    }
  },
  {
    "id": "8443ffe3-ecd7-48c4-83e0-96bd5db67d17",
    "data": {
      "gender": "M",
      "first name": "Nihal ",
      "last name": "S Kumar",
      "birthday": "Vasai,Mumbai",
      "avatar": require("./images/Nihal.jpg")
    },
    "rels": {
      "father": "e7679ad7-9dbe-4252-aad9-d796574fb2e4",
      "mother": "22413a4d-3308-411e-bf2b-15cf000b2364",
      "spouses": [
        "9881596b-3cd9-40ec-bb08-0ddb36064bfe"
      ],
      "children": [
        "b0d06e64-a680-4b85-b8ba-be43b9426725"
      ]
    }
  },
  {
    "id": "8eeb8706-6108-4e8e-ac0b-9c0fb287381a",
    "data": {
      "gender": "M",
      "first name": "Prabodh ",
      "last name": "J Kumar",
      "birthday": "Bangalore,Karnataka",
      "avatar": require("./images/Prabodh kumar.png")
    },
    "rels": {
      "spouses": [
        "dc4f71a3-daf2-417c-b7b1-db5c2a0b6c07"
      ],
      "children": [
        "55028db6-1877-4e3a-981b-c0c2249b5bf1",
        "5a0d8e0f-19ee-47ed-bbd7-97ca8bc407a8"
      ]
    }
  },
  {
    "id": "55028db6-1877-4e3a-981b-c0c2249b5bf1",
    "data": {
      "gender": "M",
      "first name": "Pratam ",
      "last name": "P Kumar",
      "birthday": "Bangalore,Karnataka",
      "avatar": require("./images/Pratam.png")
    },
    "rels": {
      "mother": "dc4f71a3-daf2-417c-b7b1-db5c2a0b6c07",
      "father": "8eeb8706-6108-4e8e-ac0b-9c0fb287381a",
      "spouses": [
        "51bac37d-21c7-4062-9c46-92efcc18965a"
      ]
    }
  },
  {
    "id": "5a0d8e0f-19ee-47ed-bbd7-97ca8bc407a8",
    "data": {
      "gender": "M",
      "first name": "Parichit",
      "last name": "P Kumar",
      "birthday": "Amsterdam, Netherlands",
      "avatar": require("./images/Parichit.png")
    },
    "rels": {
      "father": "8eeb8706-6108-4e8e-ac0b-9c0fb287381a",
      "mother": "dc4f71a3-daf2-417c-b7b1-db5c2a0b6c07",
      "spouses": [
        "9de48ffb-c6ee-41cd-8340-875d7dcdcebe"
      ]
    }
  },
  {
    "id": "51bac37d-21c7-4062-9c46-92efcc18965a",
    "data": {
      "gender": "F",
      "first name": "Arpita ",
      "last name": "Pratam",
      "birthday": "Bangalore,Karnataka",
      "avatar": require("./images/Arpitha.jpg")
    },
    "rels": {
      "spouses": [
        "55028db6-1877-4e3a-981b-c0c2249b5bf1"
      ]
    }
  },
  {
    "id": "9de48ffb-c6ee-41cd-8340-875d7dcdcebe",
    "data": {
      "gender": "F",
      "first name": "Ayda Parichit",
      "last name": "",
      "birthday": "Amsterdam, Netherlands",
      "avatar": require("./images/Ayda.jpg")
    },
    "rels": {
      "spouses": [
        "5a0d8e0f-19ee-47ed-bbd7-97ca8bc407a8"
      ]
    }
  },
  {
    "id": "2fc54c70-460b-4812-b27a-cb1b9a5b2c90",
    "data": {
      "gender": "M",
      "first name": "Nayana",
      "last name": "U Mulky",
      "birthday": "Andheri, Mumbai",
      "avatar": require("./images/Nayana.png")
    },
    "rels": {
      "spouses": [
        "9a23ba40-a9ea-4db7-b2db-3cf492615d7b"
      ],
      "children": [
        "77381d4c-a438-4b96-8c3a-e07fcdc9cb1a",
        "b785ea69-9de3-4a01-8b94-a91405faba79"
      ]
    }
  },
  {
    "id": "77381d4c-a438-4b96-8c3a-e07fcdc9cb1a",
    "data": {
      "gender": "F",
      "first name": "Nireeksha ",
      "last name": "Mulky",
      "birthday": "California, United States",
      "avatar": require("./images/Nireeksha.jpg")
    },
    "rels": {
      "father": "9a23ba40-a9ea-4db7-b2db-3cf492615d7b",
      "mother":"2fc54c70-460b-4812-b27a-cb1b9a5b2c90",
      "spouses": [
        "5c7f1dd8-4096-433d-b27b-479126f223e7"
      ]
    }
  },
  {
    "id": "b785ea69-9de3-4a01-8b94-a91405faba79",
    "data": {
      "gender": "M",
      "first name": "Nischit",
      "last name": "U Mulky",
      "birthday": "Toronto, Canada",
      "avatar": require("./images/Nischit.jpg")
    },
    "rels": {
      "father": "9a23ba40-a9ea-4db7-b2db-3cf492615d7b",
      "mother":"2fc54c70-460b-4812-b27a-cb1b9a5b2c90"
    }
  },
  {
    "id": "5c7f1dd8-4096-433d-b27b-479126f223e7",
    "data": {
      "gender": "M",
      "first name": "Sameera",
      "last name": "V",
      "birthday": "California, United States",
      "avatar": require("./images/Sameera.jpg")
    },
    "rels": {
      "spouses": [
        "77381d4c-a438-4b96-8c3a-e07fcdc9cb1a"
      ]
    }
  },
  {
    "id": "eb281d9e-2805-41e2-97ca-5ce4decd041e",
    "data": {
      "gender": "F",
      "first name": "Amita ",
      "last name": "P Kumar",
      "birthday": "kandivali,Mumbai",
      "avatar": require("./images/Amita kumar.png")
    },
    "rels": {
      "spouses": [
        "98941dbf-7b73-4fb6-a42a-7c5394e4c624"
      ],
      "children": [
        "f3f0718f-66d5-4c8d-ace2-d2d20db64182"
      ]
    }
  },
  {
    "id": "f3f0718f-66d5-4c8d-ace2-d2d20db64182",
    "data": {
      "gender": "F",
      "first name": "Ananya",
      "last name": "P Kumar",
      "birthday": "kandivali,Mumbai",
      "avatar": require("./images/Ananya.png")
    },
    "rels": {
      "mother": "eb281d9e-2805-41e2-97ca-5ce4decd041e",
      "father": "98941dbf-7b73-4fb6-a42a-7c5394e4c624"
    }
  },
  {
    "id": "9881596b-3cd9-40ec-bb08-0ddb36064bfe",
    "data": {
      "gender": "F",
      "first name": "Shraddha",
      "last name": "N Kumar",
      "birthday": "Vasai,Mumbai",
      "avatar": require("./images/Shraddha.png")
    },
    "rels": {
      "spouses": [
        "8443ffe3-ecd7-48c4-83e0-96bd5db67d17"
      ],
      "children": [
        "b0d06e64-a680-4b85-b8ba-be43b9426725"
      ]
    }
  },
  {
    "id": "b0d06e64-a680-4b85-b8ba-be43b9426725",
    "data": {
      "gender": "F",
      "first name": "Snigddha",
      "last name": "N Kumar",
      "birthday": "Vasai,Mumbai",
      "avatar": require("./images/Snigddha.png")
    },
    "rels": {
      "father": "8443ffe3-ecd7-48c4-83e0-96bd5db67d17",
      "mother": "9881596b-3cd9-40ec-bb08-0ddb36064bfe"
    }
  },
  {
    "id": "f76be961-d164-487d-bc26-f84c55e8e32a",
    "data": {
      "gender": "M",
      "first name": "Vijay ",
      "last name": "J Kumar",
      "birthday": "Mumbai",
      "avatar": ""
    },
    "rels": {
      "mother": "7815323f-bbe5-4f72-969d-64e872cdceae",
      "father": "106751a1-5f14-442c-88ae-c3b56f3dcc36",
      "spouses": [
        "e5bf71b2-b9df-410d-9c38-d5570fecc2e6"
      ]
    }
  },
  {
    "id": "7815323f-bbe5-4f72-969d-64e872cdceae",
    "data": {
      "gender": "F",
      "first name": "Dejamma",
      "last name": "J",
      "birthday": "Palimar",
      "avatar": require("./images/Dejamma J.png")
    },
    "rels": {
      "spouses": [
        "106751a1-5f14-442c-88ae-c3b56f3dcc36"
      ],
      "children": [
        "f76be961-d164-487d-bc26-f84c55e8e32a",
        "2421c5e1-828f-4c2c-8006-06b9be62343d",
        "83af99a8-480b-410f-84e6-5a18f9348a4c",
        "a7b01191-de02-42a2-b5fb-f52a45a49e7b",
        "30ed80ea-3256-4316-9dcd-ed230427a2f7",
        "001eaa5b-1865-4ff9-8a41-1630a5f629d2"
      ]
    }
  },
  {
    "id": "2421c5e1-828f-4c2c-8006-06b9be62343d",
    "data": {
      "gender": "M",
      "first name": "Prabodh",
      "last name": "J Kumar",
      "birthday": "Bangalore,Karnataka",
      "avatar": require("./images/Prabodh kumar.png")
    },
    "rels": {
      "father": "106751a1-5f14-442c-88ae-c3b56f3dcc36",
      "mother": "7815323f-bbe5-4f72-969d-64e872cdceae",
      "spouses": [
        "52406f2e-3a01-4b36-8173-a978ce09e0e2"
      ],
      "children": [
        "5384b63a-f287-4c66-957e-a2328fb1f9b3",
        "d257c598-87b2-4d98-a15b-fe9baa25b1b1"
      ]
    }
  },
  {
    "id": "83af99a8-480b-410f-84e6-5a18f9348a4c",
    "data": {
      "gender": "M",
      "first name": "Santhosh",
      "last name": "J Kumar",
      "birthday": "Mumbai",
      "avatar": ""
    },
    "rels": {
      "father": "106751a1-5f14-442c-88ae-c3b56f3dcc36",
      "mother": "7815323f-bbe5-4f72-969d-64e872cdceae",
      "spouses": [
        "512efe4a-0731-46d4-9c58-ee1fe57151a3"
      ]
    }
  },
  {
    "id": "a7b01191-de02-42a2-b5fb-f52a45a49e7b",
    "data": {
      "gender": "F",
      "first name": "Saroja",
      "last name": "B",
      "birthday": "United Kingdom",
      "avatar": ""
    },
    "rels": {
      "father": "106751a1-5f14-442c-88ae-c3b56f3dcc36",
      "mother": "7815323f-bbe5-4f72-969d-64e872cdceae",
      "spouses": [
        "96896d80-33b1-40cf-b377-635abe8138ef"
      ],
      "children": [
        "b9841311-e403-411c-9132-5482fc6a4eaa",
        "a3e795e0-52f2-4bc6-9a9a-71970a484a1a"
      ]
    }
  },
  {
    "id": "30ed80ea-3256-4316-9dcd-ed230427a2f7",
    "data": {
      "gender": "M",
      "first name": "Dharmaprakash ",
      "last name": "J Kumar",
      "birthday": "Chennai",
      "avatar": ""
    },
    "rels": {
      "father": "106751a1-5f14-442c-88ae-c3b56f3dcc36",
      "mother": "7815323f-bbe5-4f72-969d-64e872cdceae",
      "spouses": [
        "55b15281-593e-4717-a365-b91f2ef1ab0e"
      ],
      "children": [
        "76738896-b606-4298-92b6-c5989c52563d",
        "a67a9506-a58d-4f0b-93fc-340bdb05d317"
      ]
    }
  },
  {
    "id": "001eaa5b-1865-4ff9-8a41-1630a5f629d2",
    "data": {
      "gender": "M",
      "first name": "Ajith",
      "last name": "J Kumar",
      "birthday": "Mumbai",
      "avatar": ""
    },
    "rels": {
      "father": "106751a1-5f14-442c-88ae-c3b56f3dcc36",
      "mother": "7815323f-bbe5-4f72-969d-64e872cdceae",
      "spouses": [
        "0235ccc0-d823-4fb6-8c52-71f5f89653d8"
      ],
      "children": [
        "1a753bb8-c2a8-4701-a9e9-4d2e90ef805a",
        "af62cef2-2f5a-4853-83b1-8caf82c8b926"
      ]
    }
  },
  {
    "id": "96896d80-33b1-40cf-b377-635abe8138ef",
    "data": {
      "gender": "M",
      "first name": "Bhagwandas",
      "last name": "Manipur",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "a7b01191-de02-42a2-b5fb-f52a45a49e7b"
      ],
      "children": [
        "b9841311-e403-411c-9132-5482fc6a4eaa",
        "a3e795e0-52f2-4bc6-9a9a-71970a484a1a"
      ]
    }
  },
  {
    "id": "b9841311-e403-411c-9132-5482fc6a4eaa",
    "data": {
      "gender": "M",
      "first name": "Sweekrith",
      "last name": "Manipur",
      "birthday": "Bangalore,Karnataka",
      "avatar": ""
    },
    "rels": {
      "father": "96896d80-33b1-40cf-b377-635abe8138ef",
      "mother": "a7b01191-de02-42a2-b5fb-f52a45a49e7b"
    }
  },
  {
    "id": "a3e795e0-52f2-4bc6-9a9a-71970a484a1a",
    "data": {
      "gender": "F",
      "first name": "Ichcha",
      "last name": "Manipur",
      "birthday": "United Kingdom",
      "avatar": ""
    },
    "rels": {
      "father": "96896d80-33b1-40cf-b377-635abe8138ef",
      "mother": "a7b01191-de02-42a2-b5fb-f52a45a49e7b"
    }
  },
  {
    "id": "512efe4a-0731-46d4-9c58-ee1fe57151a3",
    "data": {
      "gender": "F",
      "first name": "Harini",
      "last name": "S Kumar",
      "birthday": "Mumbai",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "83af99a8-480b-410f-84e6-5a18f9348a4c"
      ]
    }
  },
  {
    "id": "0235ccc0-d823-4fb6-8c52-71f5f89653d8",
    "data": {
      "gender": "F",
      "first name": "Vanitha ",
      "last name": "A Kumar",
      "birthday": "Mumbai",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "001eaa5b-1865-4ff9-8a41-1630a5f629d2"
      ],
      "children": [
        "1a753bb8-c2a8-4701-a9e9-4d2e90ef805a",
        "af62cef2-2f5a-4853-83b1-8caf82c8b926"
      ]
    }
  },
  {
    "id": "1a753bb8-c2a8-4701-a9e9-4d2e90ef805a",
    "data": {
      "gender": "F",
      "first name": "Saniha",
      "last name": "A Kumar",
      "birthday": "Mumbai",
      "avatar": ""
    },
    "rels": {
      "father": "001eaa5b-1865-4ff9-8a41-1630a5f629d2",
      "mother": "0235ccc0-d823-4fb6-8c52-71f5f89653d8"
    }
  },
  {
    "id": "af62cef2-2f5a-4853-83b1-8caf82c8b926",
    "data": {
      "gender": "F",
      "first name": "Anvita ",
      "last name": "A Kumar",
      "birthday": "Mumbai",
      "avatar": ""
    },
    "rels": {
      "father": "001eaa5b-1865-4ff9-8a41-1630a5f629d2",
      "mother": "0235ccc0-d823-4fb6-8c52-71f5f89653d8"
    }
  },
  {
    "id": "e5bf71b2-b9df-410d-9c38-d5570fecc2e6",
    "data": {
      "gender": "F",
      "first name": "Neelam",
      "last name": "V Kumar",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "f76be961-d164-487d-bc26-f84c55e8e32a"
      ]
    }
  },
  {
    "id": "55b15281-593e-4717-a365-b91f2ef1ab0e",
    "data": {
      "gender": "F",
      "first name": "Naina ",
      "last name": "D Kumar",
      "birthday": "Chennai",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "30ed80ea-3256-4316-9dcd-ed230427a2f7"
      ],
      "children": [
        "76738896-b606-4298-92b6-c5989c52563d",
        "a67a9506-a58d-4f0b-93fc-340bdb05d317"
      ]
    }
  },
  {
    "id": "76738896-b606-4298-92b6-c5989c52563d",
    "data": {
      "gender": "F",
      "first name": "Nireeksha ",
      "last name": "D Kumar",
      "birthday": "Chennai",
      "avatar": ""
    },
    "rels": {
      "mother": "55b15281-593e-4717-a365-b91f2ef1ab0e",
      "father": "30ed80ea-3256-4316-9dcd-ed230427a2f7"
    }
  },
  {
    "id": "a67a9506-a58d-4f0b-93fc-340bdb05d317",
    "data": {
      "gender": "M",
      "first name": "Gyanesh",
      "last name": "D Kumar",
      "birthday": "Chennai",
      "avatar": ""
    },
    "rels": {
      "father": "30ed80ea-3256-4316-9dcd-ed230427a2f7",
      "mother": "55b15281-593e-4717-a365-b91f2ef1ab0e",
      "spouses": [
        "90f0a331-ce75-49e0-93fe-ef15eb265ff6"
      ]
    }
  },
  {
    "id": "90f0a331-ce75-49e0-93fe-ef15eb265ff6",
    "data": {
      "gender": "F",
      "first name": "Raveena ",
      "last name": "G Kumar",
      "birthday": "Chennai",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "a67a9506-a58d-4f0b-93fc-340bdb05d317"
      ]
    }
  },
  {
    "id": "ebb61eff-56e5-42bc-880a-fc838645a01b",
    "data": {
      "gender": "F",
      "first name": "Prabhawati",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "60632cfe-81ce-489f-9763-527e3f037a7f"
      ],
      "children": [
        "ea75a1fc-fabf-4dfc-af75-22620aeaf08e",
        "bf856810-fd18-4337-83f2-9b20f4ae3c4d",
        "af23d8cf-d638-4c92-b6af-7c0716dc395f",
        "7f77635d-3936-470a-8593-0cd7b77ad9fe",
        "a2145a39-00df-4483-bccf-84d374269eb8",
        "53cee724-ca32-4130-acbf-fda47abf8539"
      ]
    }
  },
  {
    "id": "ea75a1fc-fabf-4dfc-af75-22620aeaf08e",
    "data": {
      "gender": "M",
      "first name": "Tharanath",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "mother": "ebb61eff-56e5-42bc-880a-fc838645a01b",
      "father": "60632cfe-81ce-489f-9763-527e3f037a7f",
      "spouses": [
        "97a280d4-82dd-458b-a331-c3f9ed040659"
      ],
      "children": [
        "7f5ffedf-b61a-4b54-bfa5-b33a597df4d1",
        "f3525e08-f512-4ec5-9a39-a1b4f4d709f4"
      ]
    }
  },
  {
    "id": "97a280d4-82dd-458b-a331-c3f9ed040659",
    "data": {
      "gender": "F",
      "first name": "Bisajakshi",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "ea75a1fc-fabf-4dfc-af75-22620aeaf08e"
      ],
      "children": [
        "7f5ffedf-b61a-4b54-bfa5-b33a597df4d1",
        "f3525e08-f512-4ec5-9a39-a1b4f4d709f4"
      ]
    }
  },
  {
    "id": "7f5ffedf-b61a-4b54-bfa5-b33a597df4d1",
    "data": {
      "gender": "M",
      "first name": "Harshavardhan",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "mother": "97a280d4-82dd-458b-a331-c3f9ed040659",
      "father": "ea75a1fc-fabf-4dfc-af75-22620aeaf08e"
    }
  },
  {
    "id": "f3525e08-f512-4ec5-9a39-a1b4f4d709f4",
    "data": {
      "gender": "F",
      "first name": "Keerthi",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "ea75a1fc-fabf-4dfc-af75-22620aeaf08e",
      "mother": "97a280d4-82dd-458b-a331-c3f9ed040659"
    }
  },
  {
    "id": "bf856810-fd18-4337-83f2-9b20f4ae3c4d",
    "data": {
      "gender": "M",
      "first name": "Vishwanath",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "60632cfe-81ce-489f-9763-527e3f037a7f",
      "mother": "ebb61eff-56e5-42bc-880a-fc838645a01b"
    }
  },
  {
    "id": "af23d8cf-d638-4c92-b6af-7c0716dc395f",
    "data": {
      "gender": "F",
      "first name": "Suhasini",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "60632cfe-81ce-489f-9763-527e3f037a7f",
      "mother": "ebb61eff-56e5-42bc-880a-fc838645a01b",
      "spouses": [
        "8e9bc90e-23ec-43f8-b06a-24f04e6349b6"
      ]
    }
  },
  {
    "id": "8e9bc90e-23ec-43f8-b06a-24f04e6349b6",
    "data": {
      "gender": "M",
      "first name": "Chandrashekhar",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "af23d8cf-d638-4c92-b6af-7c0716dc395f"
      ]
    }
  },
  {
    "id": "7f77635d-3936-470a-8593-0cd7b77ad9fe",
    "data": {
      "gender": "M",
      "first name": "Premnath",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "60632cfe-81ce-489f-9763-527e3f037a7f",
      "mother": "ebb61eff-56e5-42bc-880a-fc838645a01b"
    }
  },
  {
    "id": "a2145a39-00df-4483-bccf-84d374269eb8",
    "data": {
      "gender": "F",
      "first name": "Sumalini",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "60632cfe-81ce-489f-9763-527e3f037a7f",
      "mother": "ebb61eff-56e5-42bc-880a-fc838645a01b",
      "spouses": [
        "6bea1bb4-4941-4a5b-b4d2-97df17f86190"
      ]
    }
  },
  {
    "id": "6bea1bb4-4941-4a5b-b4d2-97df17f86190",
    "data": {
      "gender": "M",
      "first name": "Rajendra",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "a2145a39-00df-4483-bccf-84d374269eb8"
      ]
    }
  },
  {
    "id": "53cee724-ca32-4130-acbf-fda47abf8539",
    "data": {
      "gender": "F",
      "first name": "Sunalini",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "60632cfe-81ce-489f-9763-527e3f037a7f",
      "mother": "ebb61eff-56e5-42bc-880a-fc838645a01b"
    }
  },
  {
    "id": "9f8ffbca-003a-4b0f-82d0-5f153bd1479a",
    "data": {
      "gender": "F",
      "first name": "Varija",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "beb35fcc-581d-455e-adf0-ffca95b35b54"
      ],
      "children": [
        "4e121a86-4a7d-4c71-a057-43b4976fa13b",
        "e69d7798-e137-414b-8cbf-5ad8cdfae634",
        "8ba4a8b2-e4f9-4c69-a004-7b6cf05e0198"
      ]
    }
  },
  {
    "id": "4e121a86-4a7d-4c71-a057-43b4976fa13b",
    "data": {
      "gender": "M",
      "first name": "Ramdas",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "mother": "9f8ffbca-003a-4b0f-82d0-5f153bd1479a",
      "father": "beb35fcc-581d-455e-adf0-ffca95b35b54"
    }
  },
  {
    "id": "e69d7798-e137-414b-8cbf-5ad8cdfae634",
    "data": {
      "gender": "M",
      "first name": "Devdas",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "beb35fcc-581d-455e-adf0-ffca95b35b54",
      "mother": "9f8ffbca-003a-4b0f-82d0-5f153bd1479a"
    }
  },
  {
    "id": "8ba4a8b2-e4f9-4c69-a004-7b6cf05e0198",
    "data": {
      "gender": "M",
      "first name": "Kurandar",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "beb35fcc-581d-455e-adf0-ffca95b35b54",
      "mother": "9f8ffbca-003a-4b0f-82d0-5f153bd1479a"
    }
  },
  {
    "id": "e703cf72-6676-4fac-b097-cac9ef5d3d7d",
    "data": {
      "gender": "F",
      "first name": "Nalinakshi",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "5784a6cb-3643-46ce-bf62-2c0a239869ab",
      "mother": "1df5d5c6-46f1-488b-808e-8b97dde07019",
      "spouses": [
        "4e46f9c8-b9d5-4990-8cb4-1b133ce92dac"
      ]
    }
  },
  {
    "id": "5784a6cb-3643-46ce-bf62-2c0a239869ab",
    "data": {
      "gender": "M",
      "first name": "Sanjeeva Amin",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "1df5d5c6-46f1-488b-808e-8b97dde07019"
      ],
      "children": [
        "e703cf72-6676-4fac-b097-cac9ef5d3d7d",
        "ae203a70-e36a-41de-91f6-e8d64a6e53c5",
        "ccc447cd-a30e-41d9-b6c5-09daed7a0387",
        "00bbbed0-2982-426d-a13a-df58daf62e99",
        "9820c658-85ca-4941-994b-7af62225b846",
        "f81e4277-9f85-462b-9bfa-ec9363e986d1",
        "f7ac4f25-2cc1-4bc1-930f-ca00fc4280c2"
      ]
    }
  },
  {
    "id": "4e46f9c8-b9d5-4990-8cb4-1b133ce92dac",
    "data": {
      "gender": "M",
      "first name": "Shivaram",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "e703cf72-6676-4fac-b097-cac9ef5d3d7d"
      ]
    }
  },
  {
    "id": "ae203a70-e36a-41de-91f6-e8d64a6e53c5",
    "data": {
      "gender": "M",
      "first name": "Jayawanth",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "5784a6cb-3643-46ce-bf62-2c0a239869ab",
      "mother": "1df5d5c6-46f1-488b-808e-8b97dde07019"
    }
  },
  {
    "id": "ccc447cd-a30e-41d9-b6c5-09daed7a0387",
    "data": {
      "gender": "F",
      "first name": "Bisajakshi",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "5784a6cb-3643-46ce-bf62-2c0a239869ab",
      "mother": "1df5d5c6-46f1-488b-808e-8b97dde07019"
    }
  },
  {
    "id": "00bbbed0-2982-426d-a13a-df58daf62e99",
    "data": {
      "gender": "M",
      "first name": "Yashwanth",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "5784a6cb-3643-46ce-bf62-2c0a239869ab",
      "mother": "1df5d5c6-46f1-488b-808e-8b97dde07019"
    }
  },
  {
    "id": "9820c658-85ca-4941-994b-7af62225b846",
    "data": {
      "gender": "M",
      "first name": "Sunanda",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "5784a6cb-3643-46ce-bf62-2c0a239869ab",
      "mother": "1df5d5c6-46f1-488b-808e-8b97dde07019"
    }
  },
  {
    "id": "f81e4277-9f85-462b-9bfa-ec9363e986d1",
    "data": {
      "gender": "M",
      "first name": "Shashikanth",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "5784a6cb-3643-46ce-bf62-2c0a239869ab",
      "mother": "1df5d5c6-46f1-488b-808e-8b97dde07019"
    }
  },
  {
    "id": "f7ac4f25-2cc1-4bc1-930f-ca00fc4280c2",
    "data": {
      "gender": "F",
      "first name": "Shubhada",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "5784a6cb-3643-46ce-bf62-2c0a239869ab",
      "mother": "1df5d5c6-46f1-488b-808e-8b97dde07019"
    }
  },
  {
    "id": "82bcfdf7-900c-40f3-b491-8b2bd0b88201",
    "data": {
      "gender": "M",
      "first name": "Dr. S",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "ef0db942-f2e3-49cb-9cdf-c59f36439823"
      ],
      "children": [
        "54386327-1331-45cd-bacb-94dc9ff5dd52",
        "8bccb5a2-5739-4d6a-9386-cfd692a5c0d3",
        "0069a221-05f4-45d4-a45e-e5bd482924c6",
        "4b6bcbeb-1527-4b6a-bf89-0a103f25d0e8",
        "74a9818e-1572-4d06-bbb1-f9de0b68b294",
        "ab01c058-77f8-4625-9837-6b30e3985282"
      ]
    }
  },
  {
    "id": "54386327-1331-45cd-bacb-94dc9ff5dd52",
    "data": {
      "gender": "F",
      "first name": "?",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "mother": "ef0db942-f2e3-49cb-9cdf-c59f36439823",
      "father": "82bcfdf7-900c-40f3-b491-8b2bd0b88201"
    }
  },
  {
    "id": "8bccb5a2-5739-4d6a-9386-cfd692a5c0d3",
    "data": {
      "gender": "F",
      "first name": "Chandri",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "82bcfdf7-900c-40f3-b491-8b2bd0b88201",
      "mother": "ef0db942-f2e3-49cb-9cdf-c59f36439823"
    }
  },
  {
    "id": "0069a221-05f4-45d4-a45e-e5bd482924c6",
    "data": {
      "gender": "M",
      "first name": "JayPrakash",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "82bcfdf7-900c-40f3-b491-8b2bd0b88201",
      "mother": "ef0db942-f2e3-49cb-9cdf-c59f36439823"
    }
  },
  {
    "id": "4b6bcbeb-1527-4b6a-bf89-0a103f25d0e8",
    "data": {
      "gender": "M",
      "first name": "BhanuPrakash",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "82bcfdf7-900c-40f3-b491-8b2bd0b88201",
      "mother": "ef0db942-f2e3-49cb-9cdf-c59f36439823"
    }
  },
  {
    "id": "74a9818e-1572-4d06-bbb1-f9de0b68b294",
    "data": {
      "gender": "M",
      "first name": "Om Prakash",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "82bcfdf7-900c-40f3-b491-8b2bd0b88201",
      "mother": "ef0db942-f2e3-49cb-9cdf-c59f36439823"
    }
  },
  {
    "id": "ab01c058-77f8-4625-9837-6b30e3985282",
    "data": {
      "gender": "M",
      "first name": "Satya",
      "last name": "Prakash",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "82bcfdf7-900c-40f3-b491-8b2bd0b88201",
      "mother": "ef0db942-f2e3-49cb-9cdf-c59f36439823"
    }
  },
  {
    "id": "cb1f73eb-fdef-4d97-80a2-520982516b10",
    "data": {
      "gender": "F",
      "first name": "Shashi K Malpe",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "c378fc68-d5b9-4d3a-87db-f1c68b6a4332"
      ],
      "children": [
        "6c151983-9f32-4a90-947b-1ff8b48983f7"
      ]
    }
  },
  {
    "id": "6c151983-9f32-4a90-947b-1ff8b48983f7",
    "data": {
      "gender": "F",
      "first name": "Rashmi Malpe",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "mother": "cb1f73eb-fdef-4d97-80a2-520982516b10",
      "father": "c378fc68-d5b9-4d3a-87db-f1c68b6a4332"
    }
  },
  {
    "id": "52406f2e-3a01-4b36-8173-a978ce09e0e2",
    "data": {
      "gender": "F",
      "first name": "Jyothi",
      "last name": "Prabodh",
      "birthday": "Bangalore,Karnataka",
      "avatar": require("./images/Jyoti.png")
    },
    "rels": {
      "spouses": [
        "2421c5e1-828f-4c2c-8006-06b9be62343d"
      ],
      "children": [
        "5384b63a-f287-4c66-957e-a2328fb1f9b3",
        "d257c598-87b2-4d98-a15b-fe9baa25b1b1"
      ]
    }
  },
  {
    "id": "5384b63a-f287-4c66-957e-a2328fb1f9b3",
    "data": {
      "gender": "M",
      "first name": "Pratam Kumar",
      "last name": "",
      "birthday": "Bangalore,Karnataka",
      "avatar": require("./images/Pratam.png")
    },
    "rels": {
      "mother": "52406f2e-3a01-4b36-8173-a978ce09e0e2",
      "father": "2421c5e1-828f-4c2c-8006-06b9be62343d",
      "spouses": [
        "c300ba7e-29ea-46e0-900b-95f1dda5e056"
      ]
    }
  },
  {
    "id": "d257c598-87b2-4d98-a15b-fe9baa25b1b1",
    "data": {
      "gender": "M",
      "first name": "Parichit Kumar",
      "last name": "",
      "birthday": "Amsterdam, Netherlands",
      "avatar": require("./images/Parichit.png")
    },
    "rels": {
      "mother": "52406f2e-3a01-4b36-8173-a978ce09e0e2",
      "father": "2421c5e1-828f-4c2c-8006-06b9be62343d",
      "spouses": [
        "f10e9fe9-192a-4d6e-b078-96b22bdeb305"
      ]
    }
  },
  {
    "id": "c300ba7e-29ea-46e0-900b-95f1dda5e056",
    "data": {
      "gender": "F",
      "first name": "Arpitha Pratam",
      "last name": "",
      "birthday": "Bangalore,Karnataka",
      "avatar": require("./images/Arpitha.jpg")
    },
    "rels": {
      "spouses": [
        "5384b63a-f287-4c66-957e-a2328fb1f9b3"
      ]
    }
  },
  {
    "id": "f10e9fe9-192a-4d6e-b078-96b22bdeb305",
    "data": {
      "gender": "F",
      "first name": "Ayda Parichit",
      "last name": "",
      "birthday": "Amsterdam,Netherlands",
      "avatar": require("./images/Ayda.jpg")
    },
    "rels": {
      "spouses": [
        "d257c598-87b2-4d98-a15b-fe9baa25b1b1"
      ]
    }
  }
]
    }
  
  }

  render() {
    return <div className="f3" id="FamilyChart" ref={this.cont}></div>;
  }
}