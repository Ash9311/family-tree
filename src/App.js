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
      "first name": "jagannath",
      "last name": "Kumar",
      "birthday": "Palimar",
      "avatar": ""
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
      "avatar": "https://scontent.fbom12-1.fna.fbcdn.net/v/t31.18172-8/14753387_211936709238016_7396961095198057931_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=F00M4dhe3bMAX-e7MyT&tn=rhqxH1Y10ueW6icM&_nc_ht=scontent.fbom12-1.fna&oh=00_AT-GF_ksgowdUf-f_37mvGd75hKwtAQ6NLjSRdXCmiU_JQ&oe=636B1DBE"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABuJUNKOt2Ozupgr5QVgFlEzgLYX4uDqm7ycQ44dDuh991Wv9LLGSxAsFlCW80p3wm0TzvhC3wiWwFT-VJLmekKRfcY8r3zXjewvPEuMQmiHupDRPDv_ymnW1r_Sft2zIUoT3hY6vEw_y4QYujjJ2imJnH50uEHYB9MTW1C1ZsPdWOY2Wy3d03Vb77Cdz3q0m81Eqzx5eeTxaCA1pjWU5pk_6aFo2vHXaEfg5YFVe9azDgZkric7YH7wsOb6LaaqShk6PF-ZHBCf90x378Ql-Qcx37SS_m5NmdbDuwriSli37A3xNB3N2upn2QV6-sDqYgSKhqHZDNtN-eU_ObKpn0GAEGXMPViAdj7BiLX9Q1wRfgBU1VGYBVfaxygAVw04Ows/p.jpeg"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABtMydbp_AYSL1ha6dQQBk_MAeDykAhC0gONQUwDjcxgKdvZ10jqOVqjO4DCUx69Hc9KoH-jlM6GVwtF-EmoTmqltTCgOE_asiYVXzEMlCEGRtMTXfGM3sPuPpSnfmjg_WvI9U1HqvhUKLPCbXTPqyaRQZDjVbfepq2Q4EvGuaRoL6aapgwGbMjLwXAYcoepv0u7VpeKOGvkqtSGWPAmXW1_rrQHGNbJ_VDYjlfv8553GD1eKzWNFtHMOEIoKAShdJNiiBsr4cVS1WqnSjSyGjDo5iYJ727sQVCmOCpR_kn0WtIeFrabVtpfQtoNK2kvPYDS4H8XfiL7c988LSIlpUbYAm0oU21XcqmJvFOBBACI1RCiHRqKucQOnH9Hnd_emb_XZENpgi8WYFxT_qa3t5K8/p.jpeg"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABtDmuh2tYdBQmZis989TMzS7SxNkAA3VoNyp17snfZOXWv66tX_CXO5XKUTHFVarP7CS9TBeh1op_4JOSXCb8pCBmjbyu_uMQz7MWdWhka9yqUfHaPB9u3jaD9_07rBSAeALxJpbsxxzMRrh6meMEk9DdPsDDY0F58OI7gSBXSJ2GmUuOsNTmCOZbr4-0h8uVPE6kofO66IpAPmY40OmdAd6-8Nyns8VndyoWHbfSIIjZ9zlEg4n5dy-s5jpsK0dYaOcyRtPtvLna5yglVQBjrsIi5V4ZntF4fbTxZGUCk1-adZqoCMSmtEvFGII4G2MCj3WhWgolWYLEJ16pnz6mkiQKzhWOXEO5NDq8oXdGjRFGvzfPqxxpYIh05uyEjBwFNmTFn-xl7oNcHVY3GGlXIH/p.png"
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
      "avatar": "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/305921981_5625643544145472_1690731529077977092_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=vAjbicKWzRkAX8_mHTb&_nc_ht=scontent-bom1-1.xx&oh=00_AfCPXebQ4VUIyYihFvB_6kUDifb-hNpv-dAOsWcY4_L2mw&oe=63642CD3"
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
      "avatar": "https://lh3.googleusercontent.com/utwc50F4xNco6vNbs-CMqzw-q99P-MB9Er06Lgf9BIXLG94CTp8DmzWFdC50g_LZ_7NotgEayQ-_wCqf-gRGpCkBW96yxEA_iPAsXyq6jlBDYBKq7152k4UmOQhjl6HPuiyCiNeTqXt2sccRHcOCPHPwgDGk6Z0hkE4Kh8ikU_KDfMi0p9ZP0DUYpzKs9ACjVJrSNOOq_Dvsl1uSMyAFcbrnQE0S5zADdPnuvuzwuoJr_k9ozvc6y9KtFCsajU_A0I298B0PkSXqO3IeLR5U8smlmM625i-aENkXQHT-HiW1BjT59GAv-y7tlsiudav4vvHGj28l3DjhdhOUSrd4C1PpRdEipYRoljJcBuq33swCt17u6XBaOtuJYlmwjdvhLZdffuZ-ta9q74Hgu8ffB4wEz9SzkL1oyaHgyfAStVaMVQTEslA8w1G-hSjRbz7z0RTC7eInwlamB47TzxtmwCOm68lk4vSmftFpTl44PcDsETaXvgVSGGEFkbdrdKRXFPKGC0gksl1AqN0Af3-K37WggIN7_QxwrOczR1-Kri43RMF8-CNBnk6jBFFhZgvETLIeTRfa5aXftEHVQ3-k5JECsNavbw2aKJhL85uh9U0CR7iIditn6HP2s1dbfFrQGDeHIb_AKMssr0A1ViwopUpHYPt_J1iS9hW1yMiEQdZupBKbeB8m62ouep8j3AoUqiyMxPh6qm9hrBL38DGiTv_jvhSNO1V_uTbEuXXm8SPoe5ZrrpMCttxbPP9W9p5nbeKX191y0umKGjcg08QvGeXljm2sQonPPgEevJHEsV0fCc_JDKzm4qIjwzFP699d2TSe3TSI5iH4d6gtCsxqTG3HgBH85KRis4dORxXYwrDR1YSdMsTl-Tz4YhmurksPOQPMaSCedicLKxBgf3Gnp4LDqRc19PNNN-22mGVRHe9ZFmqCKA9jw6EOVw96LokfEoqjYOnELb9-Qg=w297-h273-no?authuser=0"
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
      "avatar": "https://scontent.fbom12-1.fna.fbcdn.net/v/t31.18172-8/906259_10152512291720739_5256004418848768817_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=0ASjMyJLMaAAX_YDc0p&_nc_ht=scontent.fbom12-1.fna&oh=00_AT90n6gNrvS5L_YsO1DRhgzXZBcIq3FzBPVmzIT3hB-_dw&oe=63690A4F"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABuWYpnOP5bteXkQfYUbf9-SkdfuDlb97_vXvks5_AwexDiPyzjQ3mmi2kfbuKhqWlGqrde9gxbXyBkU2TDj-bxzW0fbURTxqQGcPf63N0S8XF7lOxBnMOAH3u1SJAudrC-yjbDheCL8epu_gc9PuH1pfJqltjoJCBnGO76pxsQ8v3vuBZ3jE1sdTnuy5kYAMYEBZ2I5bqp4gRp-6bHPYsUQ-QLYl29jfphaVVFHF0vjPiR8fyFofUgvkyLqZCdAqbmAv2a0_R-d08fs413kSvbTBAsIWRrNW3YvF_wUwrv7hEaAWhgy9isUtmDTdXXWTn65jNK74rGyN7mGxCrFreXfaA1ggQSZL8kTVPrhj8KV0Av0CD-jn1vEdxh9w8yOkyXRv3jNDXsix2HMbG3RkaL3/p.jpeg"
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
      "avatar": "https://pbs.twimg.com/profile_images/1538035286847868928/EallMOJZ_400x400.jpg"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABs3EmPCsHQhxZmeEevsMiWGkxKCFj3bmLsXLttA2OXu_pqMlpaMDww_Ir_mKxEJwn6ggmVm-CC2FuHrWxmmk9HwDyYnAm_OPdPiTMJiBZ08oJEi-5YkTWL5rgWxvxQcUMa4eVPK81Tf2vp4R2U0fChUssno9RMqY0IPHEbLP1jF_YFOPk_RcU69xHSflPh1Z88zSITk_pLZutOC8iWE2w4bqH5oV5NPcUxwExjo1hGIVFWH42SLKPd-JggqAUjCSv3tCFZRUuAWEyzc1hQ4yCYEnpwY8qPOo1RBBNez6UEz7x-AykQAhExWEjUD16oHyWFE55T1PSthuUUdFojpnaX65Ktd3CbSRc9uNW2oX8wuGGTkozEDBi6aTpJq5LwAGTddxUz5Wrkp4EeM5-to9GAM/p.png"
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
      "avatar": "https://scontent.fbom12-1.fna.fbcdn.net/v/t1.6435-1/175652737_10219204633643599_349178482685622377_n.jpg?stp=c6.3.615.614a_dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mocjLM0yMT0AX-tdVnK&_nc_ht=scontent.fbom12-1.fna&oh=00_AT-CEQaBBkDzdOTOIFUNXD9jGa8Wt0N01CLZfQvX_M4I6g&oe=6367F230"
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
      "avatar": "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-1/269603759_10159384647455250_1996126181907287483_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=udUoBUALGAoAX-zt7sT&_nc_ht=scontent-bom1-1.xx&oh=00_AfAa7gKdzNzw0BePDYbpDkBjv7rS6AtndEyCYD1iN51hqg&oe=63648E4B"
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
      "avatar": "https://scontent.fbom12-1.fna.fbcdn.net/v/t31.18172-8/13329456_10154062033860250_4834449613040455645_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RX8EFV8fOSAAX-dYU7_&_nc_ht=scontent.fbom12-1.fna&oh=00_AT_qz2rrE-muEWYpnzqAiROmJp8b0AJgOlrukS-1x-EwGg&oe=636A099C"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABtASV5eH5kgsNQaRlMLlAPyL6n7axtgr-6LjPTNo-6hODtJmFv3VdvhS-toZjKk0JzkmCmGhK_tLgsF1jkXPVWx8nJ4TbcrJ-5yAStr6VGHGoTktgAQSAs0EpxgLsOxEueZGNQy8f1zYv4TKjqr34-vCoOLhXxHbZN9yEVzRAXx3zKfaeuIGFtpA0T1cEqg5X_MXlRLlLijn3SOHj2Ml6gUYbM-FbUCiqhRAdrDMdBSwVnC5ywF9wXhbrfTEMB9zkdXGauu1wsTkRdMmLYPpy6yXe5zw9QqD59AgArZVfJZXUhZ-5xvpKoNMKF23BTP1X90JXe_RkaZneCA31nwf_WxuEOhRYHuaFrMWwLPZDdcFEp7Uo42uAnFsxeNFpStIGhmjMHIj39Bcs1h_qFoKYGS/p.png"
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
      "avatar": "https://media-exp1.licdn.com/dms/image/C5103AQHapj2YiavPfQ/profile-displayphoto-shrink_800_800/0/1576587109877?e=1672876800&v=beta&t=v9Hal5PXn4oB2wDvAwy6J3NAaL3gMugc90IZZMR4-Ms"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABtxnOPgQY2N6G-aA6fVTIjnjvaRm4drVj5ZHSy14-A7LIwbvZBlrQXhh0SSXYwJVuAK16nZIzIcnONu3jFY3jTHACiO-D58xd5x8tTVPwaPi86w2XR73aFeIOkgsdURHZQpslRRp3dM3o3Krz2nGyPQKcqrQeF826e1mEkA925tfBxjAoLCDB_GCzD2ostN-TnbOHngFuXqnHpfVk9mBm_h15yAHUxex3Osqs6RHiD2vL0F-rCBycGsEbAEoZlWNdWbrLdJI9NabGR_GKKVxLvM83PYvObqwRUc9gQTU7WgosO6fNq4K6IZr81VDlL6n8BWQ1PuSbAb61DT1NUx-sJJAv0xs0sCj8j3oZR5uMtbX45AzezI-WZunVFaD_IbWk4vcyciT6sRQVU85X1JBXsr/p.png"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABvisVXiBITDruuUyuV3TMlMS7Dd76lJuuo-6upgu4rCyysBA2SiBFpj38ISfes997pGJQSA8-YiCyscgcjWfQDUC4Purnptv4_TQqm7tg0Wr5PQHsKtOLGeO8-Hiw32nLL2zFNJzW5uAqdjTkPI7mJMrMMdj1P_IMvBWdTF--KwdWjuDE4-tYTmXDZoeK_WehqFu6n3wZ0MTU9PYaG6qbuxe4LgP8Ze2KOPLPtslNjHUg_zyc9xYTeBrNlp0DqVA5uJt_Q11Tt1BpUViHwp_3noGNskwHwqVlCfrwjO5Ntx2taM72CO18B_Z-IXMGd17t9UarnCfVAH-hVb1OdYFbU849wkI8GyH23dO5ajmtueKUktoCj7vMSFQbgu_-rgt58DcQ2qyCStFnIKofFoh4Ct/p.jpeg"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABvjV7Ozs2EEIjYjrSSv0VLwPKBdTKQCl0TPZPNqeiSM_y-IHdGQ0kvBLjG-1LdK3FT27rqodEamWXTREYWJSoBdPgS5wxEBq7tKz5hDnYBoHNglYCMWAPPKu_sY9fsBDi-TpTwFqWLsj6X_UOoNWmOd4WQRVc6Coy4PV7PZ9uPYtP-1O49GytRzF2TsKOhI8FaQQcSAP46qsltR92kXWZ2yCNkzg5vr1H_cm2nUbxcfBoO0kVdxqz43hjkTp2DOWuzgit9R22zHbluUOlEjEf0I97Ntz6jnjqwYys7BHtMu0zoQVNI5kgB2MwNZGUl5M5uNV1j725XYeQxYoZaMW-WZ99cBJZXr_3zwgnTeSAhOf5ADQCgOpJq3s_5KkLoUl1BjgfpJuRM4xuma9vUEESI3/p.png"
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
      "avatar": "https://media-exp1.licdn.com/dms/image/C4D03AQEOkLaxJ_o-Ig/profile-displayphoto-shrink_800_800/0/1646238543596?e=1671062400&v=beta&t=zF_DPpoZfnt_RfUNG-HVpZ2n8Ohi4-Ta7ROWq5vSw6Q"
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
      "birthday": "California, United States",
      "avatar": "https://scontent.fbom12-1.fna.fbcdn.net/v/t31.18172-8/10699760_10101059961914749_6790436589230266459_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eDN0hh5JEX0AX8awujr&_nc_ht=scontent.fbom12-1.fna&oh=00_AT_4F2PNwaBjjyD_QogvRYIj3pHwA9MbdmHPi80w-Kf0dQ&oe=636B1437"
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
      "avatar": "https://scontent.fbom12-1.fna.fbcdn.net/v/t1.18169-9/12642695_1015629761816374_5389004073049912657_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=eZrUoXT99SQAX8j6t6p&_nc_ht=scontent.fbom12-1.fna&oh=00_AT9yI7rJjCn2SfTv12c47nJ1VpwRcRl9g7vDZg-dGhPT3A&oe=63689064"
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
      "first name": "Ayda",
      "last name": "",
      "birthday": "California, United States",
      "avatar": "https://media-exp1.licdn.com/dms/image/C4E03AQGCnpxY9a3qvA/profile-displayphoto-shrink_800_800/0/1517584647398?e=1671062400&v=beta&t=6yeXFqH9cxhPraHD-4IhyvZqPWnJa_jrT3WqFYTikuE"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABtlETqCVLkryX_jsJRURFTWSN1Su_navjOVFhwmq9KcBbNgo5mvxa4pHCrkkNOx1L-btTl8_5M7hXtQ-Lt-qq_VuIevHuRDhoxrThwCqHbIGOYOS_xOEspztzKA9-fqO2t-OUqQWZtVFKRseY9E-ZTmRR5xq91zO9nO5h7qkbolCWLNDfJutOywvE567cDg4NMrOEFp2h4nM3oAo3JmnjhlT93Y0A8Qn2HgTQBiCp7Yymp0KF5ZoglOM76PfWEbOvpjbvXLp547-F8zg4IpGlEySlH0Y4_NI4FGiXfWY5MSE47IbUz_oUzs9toQFYFDSC7GQ7bnxwy9IKTLGDzl8RKB_NDod7ojcQc4TL-fa1fQ3bmtP8IZj0_nDhFYe44HuGXlI3xbBfMr-w1DUDOsp_lQ/p.png"
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
      "avatar": "https://media-exp1.licdn.com/dms/image/C4E03AQG6-wnbnsBrjw/profile-displayphoto-shrink_800_800/0/1558107482149?e=1671062400&v=beta&t=yuN3lasBVik2BOhl0tkMt1gi7rTjN1wHqzgrqZmMKWE"
    },
    "rels": {
      "father": "2fc54c70-460b-4812-b27a-cb1b9a5b2c90",
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
      "avatar": "https://media-exp1.licdn.com/dms/image/C5603AQG_s93zmlLMhA/profile-displayphoto-shrink_800_800/0/1533339108030?e=1671062400&v=beta&t=0xKqe_v3NZmc0A8EanhSHiiqdBBb_88PjSs0JdHBFvo"
    },
    "rels": {
      "father": "2fc54c70-460b-4812-b27a-cb1b9a5b2c90"
    }
  },
  {
    "id": "5c7f1dd8-4096-433d-b27b-479126f223e7",
    "data": {
      "gender": "M",
      "first name": "Sameera",
      "last name": "V",
      "birthday": "California, United States",
      "avatar": "https://media-exp1.licdn.com/dms/image/C4E03AQErVo44zCNGug/profile-displayphoto-shrink_800_800/0/1557891531360?e=1671062400&v=beta&t=jqc3N9xE_pCnYVdvxWjjSTVS1DHOelT6fa7h-0gAso4"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABsL74HabRWxUA0J_0_icq-g5hCiDk-NvYbxQIKZHxwQhPWxNf2Ld_qTtgI24L_WdaC6kpkS4O1nJ8HkooZhkVoV47eLcfjGlS9kVpLj5gYW_WHPT4LBgsw11ZjUqKbgnLyOv4ciPAkAJnR0wW_PL8b_YqXNug2SeCwJai_QSn9PquzCLx2JgSyNBOKxIoPx3H0vNq65MrIbwvSkra60uNG9kn0PDhvbnEFHu5ZF6a4phAEMXScadkWSARgHRnOgputOzcNiDjMopZcSX0fBB6Og9F4bBHtKJ2KjQ3bTBRKfzhrWsGiYWEXBjHVjFkjoXB8h0CqyK5kvBGUsL3PTdkOO4kGR1zyK40JWvYLxk3CjeVPLjt9wxhhFIryEHXCH1AGFawdgnTWBY6_VJUJYsMEM/p.png"
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
      "avatar": "https://lh3.googleusercontent.com/jYmuU4iVJytmG4p9t_MwYFY1ZyVEVujX-HYX0Q9PALPVOp_Me_QAGQWOlgbDWvHPEdy_Qpp_dYZGODXrXjAi9IPTmUBEKK7gPB_lXFd6CaMCm_GguizQcsxKZe60vnzAeq2L6lLxxx0DPLvMbD-xRC9FV2yJSQb7GWuCJn7LLXhIoJSCZMX02t6dc_IjPgutbrdj0QAG3G_X8lLEsrAUpR-j8g0h4H_uku81GdNZl7c-sR-1JJHMKY333NHMou4NmduKnq8jZU78L3EHqHWl5lByzLqJjBZ71dYh7o5GdtrNZixa2OKxuPvuSWmNAPbJm9n1BSmRnVRJm0lDiblE9guArsrRnrXQc9RDy0LO0cNPvT9dq_cRXBr2x3wYebrE6cxy5xL1kl5r_-3ex4Q9WfC7v8-jypDS6RH_UMNfeXwnT8xnNGx9vwoX2dg6FEZVNOmGlon3GXM83B9EBeo4Ocm6Jratrirr3Elrp91DJwW2HMZCDCsdk6oHVHyoRuxRO6DTGh63jgZJEG_8KPEJceBub6jQuexN3BqXgTAWrIho6oiB7151WF8Q4WgQZwaunTZCFzA3pZSSN6QhYRbaU9smb618mh5ss_ubnZfsuTFdKOifrjfPaFrYHTIa3JrUafmmcljveGexQyXj62GHfk7MBLbyxMcHXTzwxUB_iciyT5ua0Ybz4SsKVWKU0Hb6S-oAXXiyJ--4UMc9BzrlapJIM_5ZXyE3A035upPzrjQG_OqQwWbY4jWwUBUje8QrJDtk06zv-zG7hDKbr3kkHCNhW8zmxnefALXIPzBhBXorR5k8YzXf7z3uqjf0WKFIzcBpOSjGyQA_DCVvnM82Xw7xaSeLkDIVmzANco3Akw4VRci_0-lctR3Mfr_4Xku6pzEP2Mt0RCPHgFU7o88-vllAc-0SsIpGXih5DQcLi9--o1SgZgwJTkVwhW-Q8oBqeK8mQgkwtWRa6w=w173-h163-no?authuser=0"
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
      "avatar": "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-1/312024333_5921360651216700_5082414235592403584_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=g4Z8tdhs1ZAAX8pu1s2&_nc_ht=scontent-bom1-1.xx&oh=00_AfCcuk_TiOpWRftO4vbJcb0Xt2Sit72reFABqzuGUqw5EQ&oe=636518BB"
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
      "avatar": "https://previews.dropbox.com/p/thumb/ABvC2j86koPz5UvGpJ9xVAjDYcDbNj9OQTWo-fJ0fH3TCm0U9A9L0qzsj7o5iE_5JLkWxTWl7_1_ga6yghTOVhxA7nF4mxilZEfFq3quVnbyvjEvJy2JaR2qNTJ1ZzSHI4-k-sBNM-PkmjjnvhkTEB-KjUKYpOv9SfPwU1abljdIoV_Xxbo0t9ntBNDXT3fvFLiQp2N4C8PyE8MbR1czRzXpignIXTsrni5C1LZ6SQKVOC9TA4AQRQd_KRyOrhj7Xeh7F1Zj3rHf6ml5KtC_iCmpQU3qrvVBImfde_iOGgGYP7P2PiLTEkJmLyxIjIornM-gSA-4-y7OTFjmrOIVqgPbsS1tb4OXDD0mU6wFJ9fLk4WzU8sCiHihJqL-xssD_CCKz58u83aLQPPYoXNZwKoA/p.png"
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
      "avatar": ""
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
      "avatar": ""
    },
    "rels": {
      "father": "106751a1-5f14-442c-88ae-c3b56f3dcc36",
      "mother": "7815323f-bbe5-4f72-969d-64e872cdceae"
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
  }
]
    }
  
  }

  render() {
    return <div className="f3" id="FamilyChart" ref={this.cont}></div>;
  }
}