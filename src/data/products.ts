export const categories = [
  "Longsleeve",
  "T-shirt boxyfit",
  "T-shirt oversize",
  "Poloshirt",
  "Singlet",
  "Hoodie",
  "Hoodie boxyfit",
  "Kemeja",
  "Denim pants",
  "Longpants",
  "Shortpants",
  "Caps",
] as const;
type Category = (typeof categories)[number];

type Product = {
  name: string;
  material: string;
  price: number;
  discountPrice?: number;
  sizes: string[];
  productLink: string;
  category: Category;
};

export const products: Product[] = [
  {
    name: "Lessegos Longsleeve Boxy Fit Radix Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 135300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Boxy-Fit-Radix-Hitam-i.302670518.26586458757",
    category: "Longsleeve",
  },
  {
    name: "Lessegos Longsleeve Boxy Fit Start Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 140300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Boxy-Fit-Start-Hitam-i.302670518.29635798402",
    category: "Longsleeve",
  },
  {
    name: "Lessegos Longsleeve Boxy Fit Venum Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Boxy-Fit-Venum-Putih-i.302670518.41208228354",
    category: "Longsleeve",
  },
  {
    name: "Lessegos Longsleeve Boxy Fit Wiser Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Boxy-Fit-Wiser-Hitam-i.302670518.43308233628",
    category: "Longsleeve",
  },
  {
    name: "Lessegos Longsleeve Boxy Fit Venum Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Boxy-Fit-Venum-Hitam-i.302670518.40458228906",
    category: "Longsleeve",
  },
  {
    name: "Lessegos Longsleeve Boxy Fit Libere Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 148300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Boxy-Fit-Libere-Hitam-i.302670518.41250436418",
    category: "Longsleeve",
  },
  {
    name: "Lessegos Longsleeve Boxy Fit Ribbon Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 150300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Boxy-Fit-Ribbon-Hitam-i.302670518.42701808861",
    category: "Longsleeve",
  },
  {
    name: "Lessegos Longsleeve Boxy Fit Ribbon Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 150300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Boxy-Fit-Ribbon-Putih-i.302670518.40601794065",
    category: "Longsleeve",
  },
  {
    name: "Lessegos Longsleeve Double Layer Boxy Fit Castellum Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 150300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Double-Layer-Boxy-Fit-Castellum-Hitam-i.302670518.29659208097",
    category: "Longsleeve",
  },
  {
    name: "Lessegos Longsleeve Double Layer Boxy Fit Noctum Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 170300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Longsleeve-Double-Layer-Boxy-Fit-Noctum-Hitam-i.302670518.25335311083",
    category: "Longsleeve",
  },

  {
    name: "Lessegos Boxy Tshirt Polos 24s",
    material: "Katun",
    price: 280000,
    discountPrice: 79300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Polos-24s-i.302670518.24425610823",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Polos Heavyweight 16s",
    material: "Katun",
    price: 280000,
    discountPrice: 87300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Polos-Heavyweight-16s-i.302670518.24367786406",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Emblematic 24s Dark Grey",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Emblematic-24s-Dark-Grey-i.302670518.26607233071",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Emblematic 24s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Emblematic-24s-Hitam-i.302670518.29857241156",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Cursive Heavyweight 16s",
    material: "Katun",
    price: 280000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Cursive-Heavyweight-16s-i.302670518.26001209625",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Rose Peace 24s Dark Grey",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Rose-Peace-24s-Dark-Grey-i.302670518.28157233117",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Gorras Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Gorras-Putih-i.302670518.25521652364",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Grave Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Grave-Putih-i.302670518.25571653295",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Gorras Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Gorras-Hitam-i.302670518.25421655824",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Medival Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Medival-Hitam-i.302670518.25773779776",
    category: "T-shirt boxyfit",
  },

  {
    name: "Lessegos Boxy Tshirt Real Eyes Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Real-Eyes-Hitam-i.302670518.24721653264",
    category: "T-shirt boxyfit",
  },

  {
    name: "Lessegos Boxy Tshirt Torad Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 120300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Torad-Hitam-i.302670518.26907161951",
    category: "T-shirt boxyfit",
  },

  {
    name: "Lessegos Boxy Tshirt Blaze Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 120300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Blaze-Hitam-i.302670518.24071659113",
    category: "T-shirt boxyfit",
  },

  {
    name: "Lessegos Boxy Tshirt Enforced Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Enforced-Heavyweight-16s-Hitam-i.302670518.25367816160",
    category: "T-shirt boxyfit",
  },

  {
    name: "Lessegos Boxy Tshirt Medival Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 121300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Medival-Putih-i.302670518.25024912975",
    category: "T-shirt boxyfit",
  },

  {
    name: "Lessegos Boxy Tshirt Dicenity Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Dicenity-Heavy-Weight-16s-Hitam-i.302670518.28872480131",
    category: "T-shirt boxyfit",
  },

  {
    name: "Lessegos Boxy Tshirt Predio Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Predio-Heavy-Weight-16s-Hitam-i.302670518.41708246624",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Presio Heavy Weight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Presio-Heavy-Weight-16s-Putih-i.302670518.43558255154",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Cartel Heavy Weight 16s HITAM",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Cartel-Heavy-Weight-16s-HITAM-i.302670518.27365461771",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Best Ex Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Best-Ex-Hitam-i.302670518.25026701505",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Emblematic 24s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Emblematic-24s-Putih-i.302670518.26957241147",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Sorcery Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 124300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Sorcery-Heavy-Weight-16s-Hitam-i.302670518.26473253353",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Sorcery Heavy Weight 16s Green",
    material: "Katun",
    price: 250000,
    discountPrice: 124300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Sorcery-Heavy-Weight-16s-Green-i.302670518.29523257496",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Unclear Heavy Weight 16s Dark Brown",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Unclear-Heavy-Weight-16s-Dark-Brown-i.302670518.26374610221",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Hellfire Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Hellfire-Heavy-Weight-16s-Hitam-i.302670518.28438609130",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Drape Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Drape-Heavy-Weight-16s-Hitam-i.302670518.28288616633",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Thought Heavyweight 16s Hitam",
    material: "Katun Murni",
    price: 280000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Thought-Heavyweight-16s-Hitam-i.302670518.25167812448",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Spike Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Spike-Heavy-Weight-16s-Hitam-i.302670518.29222607305",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Sicko Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Sicko-Hitam-i.302670518.28307162027",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Lavons 24s Dark Brown",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Lavons-24s-Dark-Brown-i.302670518.27454511125",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Dome Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Dome-Putih-i.302670518.29357158791",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Cordela Heavyweight 16s Green",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Cordela-Heavyweight-16s-Green-i.302670518.24268416618",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Vamtac Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Vamtac-Putih-i.302670518.25571652456",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Vamtac Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Vamtac-Hitam-i.302670518.25171655397",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Fokker Heavy weight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 127300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Fokker-Heavy-weight-16s-Hitam-i.302670518.29051030051",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Lavons Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 128300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Lavons-Heavyweight-16s-Hitam-i.302670518.26202932722",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Unclear Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 128300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Unclear-Heavy-Weight-16s-Hitam-i.302670518.29574605503",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Lavons Heavy Weight 16s Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 128300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Lavons-Heavy-Weight-16s-Putih-i.302670518.26702937313",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Keise Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 128300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Keise-Heavy-Weight-16s-Hitam-i.302670518.27785601918",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Castellum Heavyweight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 128300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Castellum-Heavyweight-16s-Hitam-i.302670518.29610141904",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Keise Heavyweight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 128300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Keise-Heavyweight-16s-Putih-i.302670518.26535599462",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Flared Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 128300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Flared-Heavyweight-16s-Hitam-i.302670518.24718065544",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Nomercy Heavyweight 16s Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 128300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Nomercy-Heavyweight-16s-Putih-i.302670518.29806933298",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Flared Heavyweight 16s Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 128300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Flared-Heavyweight-16s-Putih-i.302670518.24518062794",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Amplus Heavy Weight 16s HITAM",
    material: "Katun",
    price: 250000,
    discountPrice: 129300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Amplus-Heavy-Weight-16s-HITAM-i.302670518.26015617673",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Cartel Heavy Weight 16s PUTIH",
    material: "Katun",
    price: 250000,
    discountPrice: 129300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Cartel-Heavy-Weight-16s-PUTIH-i.302670518.25787581773",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Gonna Start Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 130300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Gonna-Start-Heavy-Weight-16s-Hitam-i.302670518.27186043197",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Strikeout Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 130300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Strikeout-Heavyweight-16s-Hitam-i.302670518.27206933251",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Anaheim Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 130300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Anaheim-Heavyweight-16s-Hitam-i.302670518.26100004872",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Veiled Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 130300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Veiled-Heavyweight-16s-Hitam-i.302670518.27106935875",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Ritval Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 131300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Ritval-Heavy-Weight-16s-Hitam-i.302670518.28372981296",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Vaveus Heavyweight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 131300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Vaveus-Heavyweight-16s-Putih-i.302670518.28505151999",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Strikeout Heavyweight 16s Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 131300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Strikeout-Heavyweight-16s-Putih-i.302670518.28806935610",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Heavy Weight 16s Polos Washed Vintage",
    material: "Katun",
    price: 280000,
    discountPrice: 133300,
    sizes: ["S", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Heavy-Weight-16s-Polos-Washed-Vintage-i.302670518.41451548417",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Enso Heavyweight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 133300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Enso-Heavyweight-16s-Putih-i.302670518.27474794556",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Nerve Heavyweight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 133300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Nerve-Heavyweight-16s-Hitam-i.302670518.26055324436",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Noctum Heavyweight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 135300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Noctum-Heavyweight-16s-Hitam-i.302670518.27060151624",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Raver Pecah Pola Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 136300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Raver-Pecah-Pola-Heavy-Weight-16s-Hitam-i.302670518.26229710383",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Spyced Heavyweight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 136300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Spyced-Heavyweight-16s-Hitam-i.302670518.25635635296",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt BTD V2 Heavy Weight 16s PUTIH",
    material: "Katun",
    price: 250000,
    discountPrice: 136300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-BTD-V2-Heavy-Weight-16s-PUTIH-i.302670518.28673253190",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Finger Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 136300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Finger-Heavy-Weight-16s-Hitam-i.302670518.29172864701",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Raver Pecah Pola Heavy Weight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 136300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Raver-Pecah-Pola-Heavy-Weight-16s-Putih-i.302670518.27579710234",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Makima Heavyweight 16s Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 136300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Makima-Heavyweight-16s-Putih-i.302670518.25067810373",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Costa Heavyweight 16s",
    material: "Katun",
    price: 280000,
    discountPrice: 136300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Costa-Heavyweight-16s-i.302670518.25619689310",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Savant Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 136300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Savant-Heavyweight-16s-Hitam-i.302670518.24819689861",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Cornus Heavy Weight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 138300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Cornus-Heavy-Weight-16s-Putih-i.302670518.25090088612",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt BTD V2 Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 138300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-BTD-V2-Heavy-Weight-16s-Hitam-i.302670518.27673248641",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Lullaby Heavy Weight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 138300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Lullaby-Heavy-Weight-16s-Putih-i.302670518.27524589762",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Forgoth Heavyweight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 138300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Forgoth-Heavyweight-16s-Hitam-i.302670518.28160146681",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Trippy Heavyweight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 138300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Trippy-Heavyweight-16s-Hitam-i.302670518.27505773102",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt True Friends Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 139300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-True-Friends-Heavyweight-16s-Hitam-i.302670518.25419693404",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Fracture Heavyweight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 139300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Fracture-Heavyweight-16s-Putih-i.302670518.26355892201",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Amplus Heavy Weight 16s PUTIH",
    material: "Katun",
    price: 250000,
    discountPrice: 139300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Amplus-Heavy-Weight-16s-PUTIH-i.302670518.26515462016",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Gloire Heavy Weight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 140300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Gloire-Heavy-Weight-16s-Hitam-i.302670518.26051210529",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Sorcery Heavy Weight 16s Dark Brown",
    material: "Katun",
    price: 250000,
    discountPrice: 140300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Sorcery-Heavy-Weight-16s-Dark-Brown-i.302670518.27323253035",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Flocka Heavy Weight 16s Dark Brown",
    material: "Katun",
    price: 250000,
    discountPrice: 140300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Flocka-Heavy-Weight-16s-Dark-Brown-i.302670518.24690382513",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Raglan Chain Heavy Weight 16s",
    material: "Katun",
    price: 250000,
    discountPrice: 140300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Raglan-Chain-Heavy-Weight-16s-i.302670518.41404147884",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Recluse Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 140300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Recluse-Heavyweight-16s-Hitam-i.302670518.21796555425",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Raglan Libertad Heavy Weight 16s",
    material: "Katun",
    price: 250000,
    discountPrice: 140300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Raglan-Libertad-Heavy-Weight-16s-i.302670518.43255558443",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Blured Face Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 140300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Blured-Face-Heavyweight-16s-Hitam-i.302670518.22389603358",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Raglan Above Heavy Weight 16s",
    material: "Katun",
    price: 250000,
    discountPrice: 140300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Raglan-Above-Heavy-Weight-16s-i.302670518.40654133327",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Clover Heavy Weight 16s Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 141300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Clover-Heavy-Weight-16s-Putih-i.302670518.26062564110",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Hikari Heavyweight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 141300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Hikari-Heavyweight-16s-Putih-i.302670518.26055945960",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Enso Heavyweight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 144300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Enso-Heavyweight-16s-Hitam-i.302670518.29374803694",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Tavren Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Tavren-Heavyweight-16s-Hitam-i.302670518.24967989099",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Fury Heavy Weight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Fury-Heavy-Weight-16s-Hitam-i.302670518.28324604326",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Bones Chrome Heavyweight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Bones-Chrome-Heavyweight-16s-Hitam-i.302670518.24991363518",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Fury Heavy Weight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Fury-Heavy-Weight-16s-Putih-i.302670518.28224589592",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Bones Chrome Heavyweight 16s Putih",
    material: "Katun",
    price: 250000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Bones-Chrome-Heavyweight-16s-Putih-i.302670518.26276015889",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Fiveraface Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Fiveraface-Heavyweight-16s-Hitam-i.302670518.25668665051",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Voila Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 146300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Voila-Heavyweight-16s-Hitam-i.302670518.25617996704",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Divide Heavyweight 16s",
    material: "Katun",
    price: 280000,
    discountPrice: 146300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Divide-Heavyweight-16s-i.302670518.24969695394",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Zorlac Heavyweight 16s Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 151300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Zorlac-Heavyweight-16s-Putih-i.302670518.25867810670",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Clover Heavy Weight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 151300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Clover-Heavy-Weight-16s-Hitam-i.302670518.26662405876",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Core Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 151300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Core-Heavyweight-16s-Hitam-i.302670518.25117982225",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Enforced Heavyweight 16s Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 151300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Enforced-Heavyweight-16s-Putih-i.302670518.25017815131",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Hazel Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 151300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Hazel-Heavyweight-16s-Hitam-i.302670518.25419692761",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Fracture Heavyweight 16s Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 151300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Fracture-Heavyweight-16s-Hitam-i.302670518.27005889469",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Raver Pecah Pola Heavy Weight 16s Washed Vintage",
    material: "Katun",
    price: 280000,
    discountPrice: 161300,
    sizes: ["S", "M", "L"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Raver-Pecah-Pola-Heavy-Weight-16s-Washed-Vintage-i.302670518.26485266125",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Nomercy Heavyweight 16s Hitam",
    material: "Katun",
    price: 280000,
    discountPrice: 161300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Nomercy-Heavyweight-16s-Hitam-i.302670518.26156935979",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Veiled Heavyweight 16s Putih",
    material: "Katun",
    price: 280000,
    discountPrice: 161300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Veiled-Heavyweight-16s-Putih-i.302670518.26306935650",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Heavy Weight 16s Crusher Washed Vintage",
    material: "Katun",
    price: 280000,
    discountPrice: 171300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Heavy-Weight-16s-Crusher-Washed-Vintage-i.302670518.26836664886",
    category: "T-shirt boxyfit",
  },
  {
    name: "Lessegos Boxy Tshirt Heavy Weight 16s Voulness Washed Vintage",
    material: "Katun",
    price: 280000,
    discountPrice: 171300,
    sizes: ["S"],
    productLink:
      "https://shopee.co.id/Lessegos-Boxy-Tshirt-Heavy-Weight-16s-Voulness-Washed-Vintage-i.302670518.42801189606",
    category: "T-shirt boxyfit",
  },

  {
    name: "Lessegos Celana Pendek Jorts Cracked Denim",
    material: "Denim",
    price: 360000,
    discountPrice: 257500,
    sizes: ["28", "30", "32", "34", "36"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Pendek-Jorts-Cracked-Denim-i.302670518.29017081654",
    category: "Denim pants",
  },
  {
    name: "Lessegos Celana Pendek Jorts Carpenter Double Knee Axe V2 Denim",
    material: "Denim",
    price: 360000,
    discountPrice: 267500,
    sizes: ["28", "30", "32", "34", "36"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Pendek-Jorts-Carpenter-Double-Knee-Axe-V2-Denim-i.302670518.29966725722",
    category: "Denim pants",
  },
  {
    name: "Lessegos Celana Panjang Baggy Pothead V2 Denim",
    material: "Denim",
    price: 380000,
    discountPrice: 284000,
    sizes: ["28", "30", "32", "34", "36"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Panjang-Baggy-Pothead-V2-Denim-i.302670518.26716723586",
    category: "Denim pants",
  },
  {
    name: "Lessegos Celana Panjang Baggy Cleatus Denim",
    material: "Denim",
    price: 380000,
    discountPrice: 279000,
    sizes: ["28", "30", "32", "34", "36"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Panjang-Baggy-Cleatus-Denim-i.302670518.29866723418",
    category: "Denim pants",
  },
  {
    name: "Lessegos Celana Panjang Baggy Cross Hitam",
    material: "Denim",
    price: 549000,
    discountPrice: 350000,
    sizes: ["28", "30", "32"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Panjang-Baggy-Cross-Hitam-i.302670518.29929694775",
    category: "Denim pants",
  },
  {
    name: "Lessegos Celana Panjang Baggy Avage Denim Blue",
    material: "Denim",
    price: 380000,
    discountPrice: 299000,
    sizes: ["28", "30", "32"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Panjang-Baggy-Avage-Denim-Blue-i.302670518.27780995087",
    category: "Denim pants",
  },

  {
    name: "Lessegos Hoodie Boxy Fit Blank Polos",
    material: "Fleece",
    price: 360000,
    discountPrice: 216500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Boxy-Fit-Blank-Polos-i.302670518.29664978364",
    category: "Hoodie boxyfit",
  },
  {
    name: "Lessegos Hoodie Zipper Boxy Blank Polos",
    material: "Katun",
    price: 360000,
    discountPrice: 230500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Zipper-Boxy-Blank-Polos-i.302670518.26119877227",
    category: "Hoodie boxyfit",
  },
  {
    name: "Lessegos Hoodie Boxy Fit Lavons Hitam",
    material: "Katun, Bulu Domba",
    price: 370000,
    discountPrice: 250500,
    sizes: ["M", "L"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Boxy-Fit-Lavons-Hitam-i.302670518.29553756015",
    category: "Hoodie boxyfit",
  },
  {
    name: "Lessegos Hoodie Boxy Fit Sicko Dark grey",
    material: "Katun",
    price: 360000,
    discountPrice: 250500,
    sizes: ["M"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Boxy-Fit-Sicko-Dark-grey-i.302670518.28114822543",
    category: "Hoodie boxyfit",
  },
  {
    name: "Lessegos Hoodie Boxy Fit Gloire Hitam",
    material: "Katun",
    price: 360000,
    discountPrice: 354000,
    sizes: ["XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Boxy-Fit-Gloire-Hitam-i.302670518.27313395531",
    category: "Hoodie boxyfit",
  },
  {
    name: "Lessegos Hoodie Boxy Fit Marter Biru Benhur",
    material: "Katun",
    price: 360000,
    discountPrice: 354000,
    sizes: ["M", "L"],
    productLink: "",
    category: "Hoodie boxyfit",
  },
  {
    name: "Lessegos Hoodie Boxy Fit Duster Biru Benhur",
    material: "Katun",
    price: 360000,
    discountPrice: 354000,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Boxy-Fit-Duster-Biru-Benhur-i.302670518.27269882444",
    category: "Hoodie boxyfit",
  },
  {
    name: "Lessegos Hoodie Boxy Fit Hazel Hitam",
    material: "Katun",
    price: 360000,
    discountPrice: 354000,
    sizes: ["M", "L"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Boxy-Fit-Hazel-Hitam-i.302670518.27463400585",
    category: "Hoodie boxyfit",
  },
  {
    name: "Lessegos Hoodie Boxy Fit Reveuse Hitam",
    material: "Katun",
    price: 370000,
    discountPrice: 250500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Boxy-Fit-Reveuse-Hitam-i.302670518.27412789622",
    category: "Hoodie boxyfit",
  },
  {
    name: "Lessegos Hoodie Boxy Fit Divide Dark grey",
    material: "Katun",
    price: 360000,
    discountPrice: 250500,
    sizes: ["L"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Boxy-Fit-Divide-Dark-grey-i.302670518.29164822490",
    category: "Hoodie boxyfit",
  },

  {
    name: "Lessegos Tshirt Oversize Putih Fleur Peace",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Fleur-Peace-i.302670518.15791079539",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Polo Shirt Oversize Saint Hitam",
    material: "Katun",
    price: 270000,
    discountPrice: 120300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Polo-Shirt-Oversize-Saint-Hitam-i.302670518.25931872364",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Pai$Ley",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Pai-Ley-i.302670518.22168615895",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Doggy",
    material: "Katun",
    price: 250000,
    discountPrice: 123300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Doggy-i.302670518.19509068283",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Polo Hitam Luxe",
    material: "Katun",
    price: 260000,
    discountPrice: 120300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Polo-Hitam-Luxe-i.302670518.22254600645",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Fleur Peace",
    material: "Katun",
    price: 250000,
    discountPrice: 126300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Fleur-Peace-i.302670518.19745434978",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Pinkguns",
    material: "Katun",
    price: 250000,
    discountPrice: 131300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Pinkguns-i.302670518.21719639868",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Are Of $Hit",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Are-Of-Hit-i.302670518.16189750540",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Stripe Stripe Upsoar",
    material: "Katun",
    price: 250000,
    discountPrice: 69300,
    sizes: ["S", "M"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Stripe-Stripe-Upsoar-i.302670518.23358508069",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Pinkguns",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Pinkguns-i.302670518.20221255904",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Les Temps",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Les-Temps-i.302670518.21729989498",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Fangs",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Fangs-i.302670518.28874975081",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Intro",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Intro-i.302670518.21675962925",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Facemask II",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Facemask-II-i.302670518.11626300837",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Less Fixed",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Less-Fixed-i.302670518.20822204878",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Badbaby",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Badbaby-i.302670518.12183817509",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Doggy",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Doggy-i.302670518.16331727925",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Stripe Pocket",
    material: "Katun",
    price: 250000,
    discountPrice: 69300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Stripe-Pocket-i.302670518.18671258590",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Polo Hitam Distortion",
    material: "Katun",
    price: 260000,
    discountPrice: 140300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Polo-Hitam-Distortion-i.302670518.23454737580",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Polo Hitam Rivoli",
    material: "Katun",
    price: 260000,
    discountPrice: 124300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Polo-Hitam-Rivoli-i.302670518.22580097966",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Vates",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Vates-i.302670518.24863242933",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Barry",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Barry-i.302670518.21043085769",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Postais",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Postais-i.302670518.18114124110",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Stripe Pocket Geneva",
    material: "Katun",
    price: 250000,
    discountPrice: 69300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Stripe-Pocket-Geneva-i.302670518.24164192368",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Jurassic Punk",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Jurassic-Punk-i.302670518.25216353630",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Dertty Jerk",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Dertty-Jerk-i.302670518.41208714795",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Dripface",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Dripface-i.302670518.23263863278",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Asesino Craneo",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Asesino-Craneo-i.302670518.18260286132",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih World Peace",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-World-Peace-i.302670518.22475600017",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Movest",
    material: "Katun",
    price: 250000,
    discountPrice: 113300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Movest-i.302670518.43558714564",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Les Temps",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Les-Temps-i.302670518.19338277295",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Polo Shirt Oversize Vizor Two Tone",
    material: "Katun",
    price: 270000,
    discountPrice: 120300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Polo-Shirt-Oversize-Vizor-Two-Tone-i.302670518.24466338107",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam HumanSkies",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-HumanSkies-i.302670518.19787613043",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Jurassic Punk",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Jurassic-Punk-i.302670518.24416358404",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Mosaic",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Mosaic-i.302670518.21392510117",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Stripe Green Navy Pocket Sonix",
    material: "Katun",
    price: 250000,
    discountPrice: 69300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Stripe-Green-Navy-Pocket-Sonix-i.302670518.19993381895",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Daily Essen",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Daily-Essen-i.302670518.23634729964",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Grafincy",
    material: "Katun",
    price: 250000,
    discountPrice: 113300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Grafincy-i.302670518.43258718496",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Balls",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Balls-i.302670518.18808803288",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Trown",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Trown-i.302670518.22884446623",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih World Pressure",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-World-Pressure-i.302670518.23532974049",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Firecats",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Firecats-i.302670518.16281412729",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Dont Panic",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Dont-Panic-i.302670518.17070674214",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Funeral",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Funeral-i.302670518.23943069842",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Cruel",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Cruel-i.302670518.27502033670",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Enema",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Enema-i.302670518.24416607574",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Lavons V2 Line",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Lavons-V2-Line-i.302670518.29803868034",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Loser",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Loser-i.302670518.22354816256",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Polo Shirt Oversize VNM Two Tone",
    material: "Katun",
    price: 250000,
    discountPrice: 246500,
    sizes: ["S", "M", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Polo-Shirt-Oversize-VNM-Two-Tone-i.302670518.18409987463",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Deuce",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Deuce-i.302670518.43908718418",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Loser",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Loser-i.302670518.23233665212",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Grey Save World",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Grey-Save-World-i.302670518.18442992389",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Pigeon",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Pigeon-i.302670518.25713020344",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Rooted",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Rooted-i.302670518.23847853008",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Stripe Pocket Nocta",
    material: "Katun",
    price: 250000,
    discountPrice: 69300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Stripe-Pocket-Nocta-i.302670518.24609527899",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Mc Smoked",
    material: "Katun",
    price: 250000,
    discountPrice: 125300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Mc-Smoked-i.302670518.21129945839",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Huffer Hitam",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Huffer-Hitam-i.302670518.24505057525",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Demure",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Demure-i.302670518.24740995647",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Fontana",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Fontana-i.302670518.24908340228",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Levante",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Levante-i.302670518.25715406532",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Spectral",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Spectral-i.302670518.24701515416",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Cloax",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Cloax-i.302670518.14783525482",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Birdman",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Birdman-i.302670518.11326266340",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Villain",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Villain-i.302670518.25814540527",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Moneykey",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Moneykey-i.302670518.4296967826",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Fangs",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Fangs-i.302670518.27974964634",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Villain",
    material: "Katun",
    price: 250000,
    discountPrice: 113300,
    sizes: ["S", "M", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Villain-i.302670518.24614545229",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Desastre",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Desastre-i.302670518.26774965468",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Palm Good",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Palm-Good-i.302670518.23923834831",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih F2Ce",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-F2Ce-i.302670518.18524840283",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Beadsy",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Beadsy-i.302670518.18636586844",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Vizor",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Vizor-i.302670518.21181687384",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Grilzy",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Grilzy-i.302670518.14087087133",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam PlantX",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-PlantX-i.302670518.24307873795",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Boenas",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Boenas-i.302670518.16169935901",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Glowny",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Glowny-i.302670518.28971284691",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Core",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Core-i.302670518.24215385384",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Velour",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Velour-i.302670518.23656884080",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Imperium",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Imperium-i.302670518.17992622929",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Lavons V2 line",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Lavons-V2-line-i.302670518.27103868024",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversized Hitam Crazed",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversized-Hitam-Crazed-i.302670518.25707867415",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Robery",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Robery-i.302670518.9488017931",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Crumph",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Crumph-i.302670518.28471295602",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Pleasure Club",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Pleasure-Club-i.302670518.23268765733",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Poisonous",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Poisonous-i.302670518.17487432651",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Smile Is Good",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Smile-Is-Good-i.302670518.23032332562",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Habits",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Habits-i.302670518.23973339975",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Satisfied",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Satisfied-i.302670518.28252033321",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Helios Cat Mask",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Helios-Cat-Mask-i.302670518.21254286572",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Heavy Weight 16S Bleach",
    material: "Heavy Weight 16s",
    price: 280000,
    discountPrice: 99300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Heavy-Weight-16S-Bleach-i.302670518.22881173775",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Orbital",
    material: "Katun",
    price: 250000,
    discountPrice: 116300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Orbital-i.302670518.24057872280",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Assylum",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Assylum-i.302670518.26624975051",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Polo Hitam Blink",
    material: "Katun",
    price: 260000,
    discountPrice: 120300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Polo-Hitam-Blink-i.302670518.22054738035",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Zomp",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Zomp-i.302670518.20282471012",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Putih Dome",
    material: "Katun",
    price: 250000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Putih-Dome-i.302670518.25963242471",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Thorn",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Thorn-i.302670518.27321295306",
    category: "T-shirt oversize",
  },
  {
    name: "Lessegos Tshirt Oversize Hitam Super Horse",
    material: "Katun",
    price: 250000,
    discountPrice: 118300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Oversize-Hitam-Super-Horse-i.302670518.24607863903",
    category: "T-shirt oversize",
  },

  {
    name: "Lessegos Tshirt Polo Hitam Fontana",
    material: "",
    price: 250000,
    discountPrice: 120300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Polo-Hitam-Fontana-i.302670518.24908864366",
    category: "Poloshirt",
  },
  {
    name: "Lessegos Polo Shirt Oversize Volante List Hitam",
    material: "Katun",
    price: 270000,
    discountPrice: 120300,
    sizes: ["XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Polo-Shirt-Oversize-Volante-List-Hitam-i.302670518.29803387917",
    category: "Poloshirt",
  },
  {
    name: "Lessegos Tshirt Polo Oversize Stripe Weyz",
    material: "Katun",
    price: 250000,
    discountPrice: 69300,
    sizes: ["L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Polo-Oversize-Stripe-Weyz-i.302670518.24071445323",
    category: "Poloshirt",
  },
  {
    name: "Lessegos Tshirt Polo Regular Olive Awake",
    material: "Pique",
    price: 250000,
    discountPrice: 113300,
    sizes: ["S", "M", "L"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Polo-Regular-Olive-Awake-i.302670518.24454583195",
    category: "Poloshirt",
  },
  {
    name: "Lessegos Tshirt Polo Regular Hitam Awake",
    material: "Pique",
    price: 250000,
    discountPrice: 246500,
    sizes: ["S"],
    productLink:
      "https://shopee.co.id/Lessegos-Tshirt-Polo-Regular-Hitam-Awake-i.302670518.24604588000",
    category: "Poloshirt",
  },

  {
    name: "Lessegos Singlet Oversize Unfinished Vaega Hitam",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Vaega-Hitam-i.302670518.25235591021",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Nerve Hitam",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Nerve-Hitam-i.302670518.28809943600",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished World pressure Putih",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-World-pressure-Putih-i.302670518.26109943328",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Abandon Putih",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Abandon-Putih-i.302670518.27509943274",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Cursive Putih",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Cursive-Putih-i.302670518.27459943323",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Blured Face Hitam",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Blured-Face-Hitam-i.302670518.27160022658",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Cursive Hitam",
    material: "Katun",
    price: 200000,
    discountPrice: 196500,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Cursive-Hitam-i.302670518.26260032250",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Volante Hitam",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Volante-Hitam-i.302670518.28809938845",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Satisfied Putih",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Satisfied-Putih-i.302670518.29259943310",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Divide Putih",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Divide-Putih-i.302670518.29909938241",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Recluse Hitam",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Recluse-Hitam-i.302670518.21096625571",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Celtico Hitam",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Celtico-Hitam-i.302670518.29759955958",
    category: "Singlet",
  },
  {
    name: "Lessegos Singlet Oversize Unfinished Costa Hitam",
    material: "Katun",
    price: 200000,
    discountPrice: 89300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Singlet-Oversize-Unfinished-Costa-Hitam-i.302670518.28110031929",
    category: "Singlet",
  },

  {
    name: "Lessegos Hoodie Hitam Regular Pai$Ley",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Pai-Ley-i.302670518.21082569358",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Pigeon",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Pigeon-i.302670518.23486496802",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Fleur Peace",
    material: "Fleece",
    price: 350000,
    discountPrice: 246500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Fleur-Peace-i.302670518.13496671474",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Misty Grey Regular Baby TV",
    material: "Katun",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Misty-Grey-Regular-Baby-TV-i.302670518.26402005601",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Rose Utopia",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Rose-Utopia-i.302670518.23149897940",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Regular Misty Grey Union Green",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Regular-Misty-Grey-Union-Green-i.302670518.18895382339",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Regular Hitam List Saint",
    material: "Katun",
    price: 350000,
    discountPrice: 230500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Regular-Hitam-List-Saint-i.302670518.29102510478",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Regular Hitam Villain",
    material: "Katun, Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Regular-Hitam-Villain-i.302670518.24764540912",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Bored To Death",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Bored-To-Death-i.302670518.21390519108",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Rooted",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Rooted-i.302670518.24213758777",
    category: "Hoodie",
  },

  {
    name: "Lessegos Hoodie Misty Grey Regular Good Days",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Misty-Grey-Regular-Good-Days-i.302670518.24551484031",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Regular Hitam Spectral",
    material: "Katun",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Regular-Hitam-Spectral-i.302670518.25151516082",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Lips",
    material: "Fleece",
    price: 350000,
    discountPrice: 220500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Lips-i.302670518.19182580843",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Flared",
    material: "Katun",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Flared-i.302670518.25076463806",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Misty Grey Regular Extended",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Misty-Grey-Regular-Extended-i.302670518.22460663512",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular HumanSkies",
    material: "Katun",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-HumanSkies-i.302670518.29902039015",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Poisonous",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Poisonous-i.302670518.21956065611",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Grave",
    material: "Katun",
    price: 350000,
    discountPrice: 250500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Grave-i.302670518.20896490101",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Noid",
    material: "Fleece",
    price: 350000,
    discountPrice: 250500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Noid-i.302670518.18012242147",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Regular Black Enema",
    material: "Katun, Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Regular-Black-Enema-i.302670518.24566604138",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Thought",
    material: "Katun",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Thought-i.302670518.25876467561",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Pleasure ",
    material: "Katun",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Pleasure-Club-i.302670518.21589189409",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Core",
    material: "Katun",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Core-i.302670518.25815381828",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Curated",
    material: "Fleece",
    price: 350000,
    discountPrice: 344000,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Curated-i.302670518.23429203088",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Zomp",
    material: "Fleece",
    price: 350000,
    discountPrice: 221500,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Zomp-i.302670518.23549996123",
    category: "Hoodie",
  },
  {
    name: "Lessegos Hoodie Hitam Regular Best Ex",
    material: "Katun",
    price: 350000,
    discountPrice: 344000,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Hoodie-Hitam-Regular-Best-Ex-i.302670518.25276903332",
    category: "Hoodie",
  },

  {
    name: "Lessegos Kemeja Boxy Stripe Lengan Pendek Sainted",
    material: "Katun",
    price: 300000,
    discountPrice: 181300,
    sizes: ["S", "M", "L"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Boxy-Stripe-Lengan-Pendek-Sainted-i.302670518.25540998765",
    category: "Kemeja",
  },

  {
    name: "Lessegos Kemeja Boxy Lengan Pendek Veins",
    material: "Katun",
    price: 300000,
    discountPrice: 181300,
    sizes: ["S", "M", "L"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Boxy-Lengan-Pendek-Veins-i.302670518.27224980540",
    category: "Kemeja",
  },

  {
    name: "Lessegos Kemeja Boxy Lengan Pendek Eden",
    material: "Katun",
    price: 300000,
    discountPrice: 181300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Boxy-Lengan-Pendek-Eden-i.302670518.26924976143",
    category: "Kemeja",
  },
  {
    name: "Lessegos Kemeja Flanel Piquet",
    material: "Kain Flanel",
    price: 300000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Flanel-Piquet-i.302670518.25411571795",
    category: "Kemeja",
  },
  {
    name: "Lessegos Kemeja Lengan Pendek Oversize Paisley Black",
    material: "Katun",
    price: 300000,
    discountPrice: 171300,
    sizes: ["L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Lengan-Pendek-Oversize-Paisley-Black-i.302670518.23662602628",
    category: "Kemeja",
  },
  {
    name: "Lessegos Kemeja Lengan Pendek Oversize Paisley Grey",
    material: "Katun",
    price: 300000,
    discountPrice: 171300,
    sizes: ["M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Lengan-Pendek-Oversize-Paisley-Grey-i.302670518.23162597183",
    category: "Kemeja",
  },
  {
    name: "Lessegos Kemeja Corduroy Lengan Panjang Hitam",
    material: "Corduroy",
    price: 290000,
    discountPrice: 121300,
    sizes: ["S", "M"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Corduroy-Lengan-Panjang-Hitam-i.302670518.24863758870",
    category: "Kemeja",
  },
  {
    name: "Lessegos Kemeja Flanel Mora",
    material: "Kain Flanel",
    price: 300000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Flanel-Mora-i.302670518.25711588063",
    category: "Kemeja",
  },
  {
    name: "Lessegos Kemeja Flanel Splat",
    material: "Kain Flanel",
    price: 300000,
    discountPrice: 121300,
    sizes: ["S", "M", "L", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Flanel-Splat-i.302670518.25410832893",
    category: "Kemeja",
  },
  {
    name: "Lessegos Kemeja Flanel Allover",
    material: "Kain Flanel",
    price: 300000,
    discountPrice: 121300,
    sizes: ["S", "XL"],
    productLink:
      "https://shopee.co.id/Lessegos-Kemeja-Flanel-Allover-i.302670518.24760833387",
    category: "Kemeja",
  },

  {
    name: "Lessegos Celana Panjang Baggy Fleece Polos Hitam",
    material: "Katun, Fleece",
    price: 300000,
    discountPrice: 211500,
    sizes: ["22", "23"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Panjang-Baggy-Fleece-Polos-Hitam-i.302670518.26581156251",
    category: "Longpants",
  },
  {
    name: "Lessegos Celana Panjang Fleece Lstar Misty Grey",
    material: "Katun, Fleece",
    price: 350000,
    discountPrice: 220500,
    sizes: ["23"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Panjang-Fleece-Lstar-Misty-Grey-i.302670518.43857736549",
    category: "Longpants",
  },
  {
    name: "Lessegos Celana Chino Cell Pocket Khaki",
    material: "Chino",
    price: 360000,
    discountPrice: 181300,
    sizes: ["30", "32", "34", "36"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Chino-Cell-Pocket-Khaki-i.302670518.25922484581",
    category: "Longpants",
  },
  {
    name: "Lessegos Celana Chino Cell Pocket Green",
    material: "Cotton Twill",
    price: 420000,
    discountPrice: 181300,
    sizes: ["32"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Chino-Cell-Pocket-Green-i.302670518.25521793486",
    category: "Longpants",
  },
  {
    name: "Lessegos Celana Corduroy Daisyflow Embroidery Bright",
    material: "Corduroy",
    price: 350000,
    discountPrice: 267500,
    sizes: ["28"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Corduroy-Daisyflow-Embroidery-Bright-i.302670518.24667659366",
    category: "Longpants",
  },
  {
    name: "Lessegos Celana Panjang Corduroy Cell Pocket Khaki",
    material: "Corduroy",
    price: 360000,
    discountPrice: 181300,
    sizes: ["30", "36"],
    productLink:
      "https://shopee.co.id/Lessegos-Celana-Panjang-Corduroy-Cell-Pocket-Khaki-i.302670518.24222490542",
    category: "Longpants",
  },
  {
    name: "Lessegos Longpants Celana Panjang Terry Hitam Drown",
    material: "Terry",
    price: 300000,
    discountPrice: 171300,
    sizes: ["33"],
    productLink:
      "https://shopee.co.id/Lessegos-Longpants-Celana-Panjang-Terry-Hitam-Drown-i.302670518.20731018791",
    category: "Longpants",
  },

  {
    name: "Lessegos Sweatshort Fleece Polos Hitam",
    material: "Katun",
    price: 300000,
    discountPrice: 161300,
    sizes: ["22", "23"],
    productLink:
      "https://shopee.co.id/Lessegos-Sweatshort-Fleece-Polos-Hitam-i.302670518.41604770396",
    category: "Shortpants",
  },
  {
    name: "Lessegos Sweatshort Fleece Lstar Misty Grey",
    material: "Katun",
    price: 300000,
    discountPrice: 171300,
    sizes: ["23"],
    productLink:
      "https://shopee.co.id/Lessegos-Sweatshort-Fleece-Lstar-Misty-Grey-i.302670518.40957723389",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Fleece Hitam Villain",
    material: "Fleece",
    price: 200000,
    discountPrice: 99300,
    sizes: ["35"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Fleece-Hitam-Villain-i.302670518.24864459312",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Nylon Vnum",
    material: "Nilon",
    price: 200000,
    discountPrice: 70300,
    sizes: ["30", "33"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Nylon-Vnum-i.302670518.24830801062",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Nylon Trunk Line",
    material: "Nilon",
    price: 200000,
    discountPrice: 70300,
    sizes: ["30", "33"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Nylon-Trunk-Line-i.302670518.19383636405",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Fleece Hitam Murder",
    material: "Fleece",
    price: 200000,
    discountPrice: 99300,
    sizes: ["35"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Fleece-Hitam-Murder-i.302670518.14684683124",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Fleece Hitam Enema",
    material: "Katun",
    price: 250000,
    discountPrice: 98300,
    sizes: ["35"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Fleece-Hitam-Enema-i.302670518.24316602514",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Fleece Hitam Ovalmid",
    material: "Fleece",
    price: 200000,
    discountPrice: 99300,
    sizes: ["35"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Fleece-Hitam-Ovalmid-i.302670518.20772729344",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Fleece Hitam Vomer",
    material: "Fleece",
    price: 200000,
    discountPrice: 99300,
    sizes: ["35"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Fleece-Hitam-Vomer-i.302670518.18927669092",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Fleece Hitam Zomp",
    material: "Fleece",
    price: 200000,
    discountPrice: 99300,
    sizes: ["35"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Fleece-Hitam-Zomp-i.302670518.22049996820",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Fleece Hitam Darky",
    material: "Fleece",
    price: 200000,
    discountPrice: 196500,
    sizes: ["35"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Fleece-Hitam-Darky-i.302670518.12395635576",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Fleece Hitam Hysteria",
    material: "Fleece",
    price: 200000,
    discountPrice: 196500,
    sizes: ["35"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Fleece-Hitam-Hysteria-i.302670518.15095455077",
    category: "Shortpants",
  },
  {
    name: "Lessegos Shortpants Celana Pendek Fleece Hitam L Stars",
    material: "Fleece",
    price: 200000,
    discountPrice: 99300,
    sizes: ["35"],
    productLink:
      "https://shopee.co.id/Lessegos-Shortpants-Celana-Pendek-Fleece-Hitam-L-Stars-i.302670518.13894094239",
    category: "Shortpants",
  },
  {
    name: "Lessegos Topi Polocaps Hitam Mind",
    material: "Cotton Twill",
    price: 150000,
    discountPrice: 69300,
    sizes: [],
    productLink:
      "https://shopee.co.id/Lessegos-Topi-Polocaps-Hitam-Mind-i.302670518.23652060318",
    category: "Caps",
  },
  {
    name: "Lessegos Topi Polocaps Hitam Pleasure Club",
    material: "Cotton Twill",
    price: 150000,
    discountPrice: 71300,
    sizes: [],
    productLink:
      "https://shopee.co.id/Lessegos-Topi-Polocaps-Hitam-Pleasure-Club-i.302670518.22252062393",
    category: "Caps",
  },
];
