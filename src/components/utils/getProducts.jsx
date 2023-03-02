const products= [
    {
        id: 1,
        title:'Anillo Ambar',
        price: 3900,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum volutpat tincidun ',
        category:'Anillo',
        image:'https://www.designerartjewellery.com/images/ring%20sterling%2018k%20gold%20amber%202%20leaves%20pearl1%20.jpg',
    },
    {
      id: 2,
      title:'Anillo Azul',
      price: 4000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum volutpat tincidun ',
      category:'Anillo',
      image:'https://www.designerartjewellery.com/lightbox/spiralring705362.jpg', 
    },
    {
        id: 3,
        title:'Anillo Flor',
        price: 4000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum volutpat tincidun ',
        category:'Anillo',
        image:'https://i.etsystatic.com/7547528/r/il/cd5d1b/1707826873/il_1080xN.1707826873_jjtn.jpg', 
      },
      {
        id: 4,
        title:'Pulsera Irregular',
        price: 2000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum volutpat tincidun ',
        category:'Pulsera',
        image:'https://i.etsystatic.com/17766842/r/il/1eae7e/1831088968/il_fullxfull.1831088968_46fn.jpg', 
      },
      {
        id: 5,
        title:'Pulsera Brazalete',
        price: 2500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum volutpat tincidun ',
        category:'Pulsera',
        image:'https://i.etsystatic.com/21766463/r/il/841c39/2110691632/il_fullxfull.2110691632_cdvq.jpg', 
      },
      {
        id: 6,
        title:'Pulsera Martillada',
        price: 2000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum volutpat tincidun ',
        category:'Pulsera',
        image:'https://i.etsystatic.com/5658809/r/il/b76b60/1035100189/il_570xN.1035100189_c60j.jpg', 
      },
      {
        id: 7,
        title:'Aros Etéreos',
        price: 2000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum volutpat tincidun ',
        category:'Aros',
        image:'http://d3ugyf2ht6aenh.cloudfront.net/stores/082/466/products/aros-web-151-a5b8e7fcd6d722ee1515765184090288-640-0.webp', 
      },
      {
        id: 8,
        title:'Aros Nudos',
        price: 2000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum volutpat tincidun ',
        category:'Aros',
        image:'http://d3ugyf2ht6aenh.cloudfront.net/stores/082/466/products/img_681611-ef311d2eb64431ea5816554039724589-640-0.webp', 
      },
      {
        id: 9,
        title:'Aros Versalles',
        price: 2000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum volutpat tincidun ',
        category:'Aros',
        image:'https://d3ugyf2ht6aenh.cloudfront.net/stores/082/466/products/aros-web-16-231-31d4c08ddbc700a2c615766253537411-480-0.webp', 
      }
]

const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(products);
        }, 2000);
    }) 
    }

export default getList