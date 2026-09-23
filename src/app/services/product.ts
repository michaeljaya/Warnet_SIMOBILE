import { Service } from '@angular/core';

export interface Product {
    id: number;        // ID produk
    name: string;      // Nama barang
    category: string;  // Kategori
    buyPrice: number;  // Harga beli
    sellPrice: number; // Harga jual 
    stock: number;     // Jumlah stok tersedia
    description: string; // Deskripsi
    image: string;     // URL gambar
}

@Service()
export class ProductService {

    //Service untuk product ini
    products: Product[] = [
        {
            id: 1,
            name: 'Beras Rojolele 5kg',
            category: 'Sembako',
            buyPrice: 50000,
            sellPrice: 55000,
            stock: 10,
            description: 'Beras kualitas super dari petani lokal, pulen dan wangi.',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//719/rojolele_beras-rojo-lele--5kgx2-pcs-_full02.jpg'
        },
        {
            id: 2,
            name: 'Minyak Goreng Bimoli 2L',
            category: 'Sembako',
            buyPrice: 30000,
            sellPrice: 34000,
            stock: 0,
            description: 'Minyak goreng kelapa sawit murni untuk hidangan renyah.',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-3406188/bimoli_bimoli-2ltr-special-refill_full02.jpg'
        },
        {
            id: 3,
            name: 'Gula Pasir Gulaku 1kg',
            category: 'Sembako',
            buyPrice: 13000,
            sellPrice: 15000,
            stock: 25,
            description: 'Gula tebu asli yang manisnya pas dan bersih.',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-0407196/gulaku_gulaku-premium--1-kg-_full06.jpg'
        },
        {
            id: 4,
            name: 'Indomie Goreng',
            category: 'Makanan',
            buyPrice: 2500,
            sellPrice: 3000,
            stock: 100,
            description: 'Mie instan goreng favorit keluarga Indonesia.',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-2583228/indomie_indomie-goreng-mie-instan--85g--_full02.jpg'
        },
        {
            id: 5,
            name: 'Kopi Kapal Api Mix',
            category: 'Minuman',
            buyPrice: 12000,
            sellPrice: 14000,
            stock: 50,
            description: 'Kopi hitam bubuk manis dengan aroma yang khas.',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-10882019/kapal_api_kapal_api_special_mix_20_pcs_x_23_gr_full01_ol63f4.webp'
        },
        {
            id: 6,
            name: 'Teh Pucuk Harum',
            category: 'Minuman',
            buyPrice: 3000,
            sellPrice: 4000,
            stock: 30,
            description: 'Minuman teh melati segar manis penangkal dahaga.',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-3421184/teh-pucuk_teh-pucuk-harum-jasmine-350-ml_full02.jpg'
        },
        {
            id: 7,
            name: 'Sabun Lifebuoy',
            category: 'Kebutuhan Mandi',
            buyPrice: 3500,
            sellPrice: 4500,
            stock: 40,
            description: 'Sabun mandi antibakteri untuk melindungi keluarga dari kuman.',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-154149285/lifebuoy_full01_a309d960.webp'
        },
        {
            id: 8,
            name: 'Shampoo Clear',
            category: 'Kebutuhan Mandi',
            buyPrice: 20000,
            sellPrice: 23000,
            stock: 15,
            description: 'Shampo anti ketombe dengan sensasi dingin menyegarkan.',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/MTA-143066399/clear_clear_anti_dandruff_ice_cool_menthol_3x_sikat_ketombe_shampoo_-400_ml-_full01_q07yy44e.jpg'
        },
        {
            id: 9,
            name: 'Pepsodent White 190g',
            category: 'Kebutuhan Mandi',
            buyPrice: 11000,
            sellPrice: 13000,
            stock: 0,
            description: 'Pasta gigi pencegah gigi berlubang keluarga.',
            image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-16733315/pepsodent_pepsodent_pencegah_gigi_berlubang_toothpaste_pasta_gigi_white_190g_full08_mzclr5dp.jpeg'
        },
        {
            id: 10,
            name: 'Rinso Anti Noda 800g',
            category: 'Pembersih',
            buyPrice: 21000,
            sellPrice: 24000,
            stock: 20,
            description: 'Deterjen bubuk tangguh hilangkan noda dalam 1 kali kucek.',
            image: 'https://www.rinso.com/images/h0nadbhvm6m4/1IAugVyaV0p8VlPUEUYo2X/af30ad92f6496ec5579cff55a375977b/UG93ZGVyX2NsYXNzaWNfZnJlc2gucG5n/1080w-1080h/rinso-anti-noda-deterjen-bubuk-classic-fresh-packshot.avif'
        }
    ];

    //Method untuk mengambil produk
    ambilProduk(): Product[] {
        return this.products;
    }

    //Method untuk mencari 1 produk berdasarkan ID
    produkId(id: number): Product | undefined {
        return this.products.find(
            p => p.id === id
        );
    }

    //Method untuk menambah produk baru
    tambahProduk(name: string, category: string, buyPrice: number, sellPrice: number, stock: number, description: string, image: string = '') {
        this.products.push({
            id: this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1,
            name: name,
            category: category,
            buyPrice: buyPrice,
            sellPrice: sellPrice,
            stock: stock,
            description: description,
            image: image
        });
    }

    //Method untuk mengupdate produk yang sudah ada
    updateProduk(id: number, name: string, category: string, buyPrice: number, sellPrice: number, stock: number, description: string, image: string = '') {
        const idx = this.products.findIndex(p => p.id === id);
        if (idx !== -1) {
            this.products[idx].name = name;
            this.products[idx].category = category;
            this.products[idx].buyPrice = buyPrice;
            this.products[idx].sellPrice = sellPrice;
            this.products[idx].stock = stock;
            this.products[idx].description = description;
        }
    }

    //Method untuk menghapus produk berdasarkan ID
    hapusProduk(id: number) {
        this.products = this.products.filter(
            p => p.id !== id
        );
    }
}
