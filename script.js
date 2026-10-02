const commands = [
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/blueprint",
    "description": "Cetak biru / gambar teknis dengan anotasi detail"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/explodedview",
    "description": "Membedah dan memisahkan objek ke semua bagian komponennya"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/xray",
    "description": "Menampilkan struktur bagian dalam objek dengan efek sinar-X"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/cutaway",
    "description": "Ilustrasi potongan melintang bagian dalam objek"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/crosssection",
    "description": "Potongan melintang bertingkat, lapisan demi lapisan"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/isometric",
    "description": "Ilustrasi 3D isometrik yang rapi dan presisi"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/diagram",
    "description": "Diagram visual untuk cara kerja suatu konsep"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/flowchart",
    "description": "Diagram alur keputusan dan proses kerja terstruktur"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/mindmap",
    "description": "Peta pikiran bercabang untuk eksplorasi ide kreatif"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/infographic",
    "description": "Infografis lengkap, terstruktur, dan informatif"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/stickynotes",
    "description": "Menyusun ide dalam bentuk catatan post-it visual"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/handwritten",
    "description": "Catatan visual bergaya tulisan tangan dalam buku sketsa"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/timeline",
    "description": "Garis waktu kronologis dari perkembangan sesuatu"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/beforeafter",
    "description": "Perbandingan visual kondisi sebelum dan sesudah"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/thenvsnow",
    "description": "Komparasi metode atau gaya dulu vs sekarang"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/comparison",
    "description": "Perbandingan berdampingan (side-by-side)"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/versus",
    "description": "Adu fitur dan keunggulan 2 opsi secara head-to-head"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/scale",
    "description": "Membandingkan skala ukuran secara visual"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/anatomy",
    "description": "Bedah anatomi dan elemen penyusun dari sesuatu"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/layers",
    "description": "Visualisasi lapisan proses dari dasar hingga akhir"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/heatmap",
    "description": "Peta intensitas fokus atau titik perhatian audiens"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/network",
    "description": "Jaringan hubungan antar elemen atau aplikasi"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/birdseye",
    "description": "Tampilan sudut pandang dari atas (top-down / cenital)"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/360view",
    "description": "Tampilan objek komprehensif dari seluruh sudut (360°)"
  },
  {
    "category": "Visualisasi & Melihat Ide",
    "command": "/microscopic",
    "description": "Tampilan super zoom detail tingkat mikroskopis"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/eli5",
    "description": "Jelaskan sangat sederhana seperti untuk anak 5 tahun"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/simplify",
    "description": "Sederhanakan teks rumit, istilah hukum, atau teknis"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/analogy",
    "description": "Jelaskan konsep sulit memakai perumpamaan atau analogi"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/firstprinciples",
    "description": "Bedah konsep sampai ke prinsip dasar paling fundamental"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/deepdive",
    "description": "Penjelasan mendalam, komprehensif, dan menyeluruh"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/expert",
    "description": "Penjelasan teknis tingkat lanjut standar profesional"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/socratic",
    "description": "Bimbingan dengan pertanyaan balik pemancing pemikiran"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/teachme",
    "description": "Memberikan kelas dan kurikulum terstruktur dari nol"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/feynman",
    "description": "Teknik Feynman: uji pemahaman dan koreksi celah paham"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/cheatsheet",
    "description": "Lembar panduan cepat atau ringkasan pintasan penting"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/flashcards",
    "description": "Kartu hafalan cepat (Q&A) untuk belajar topik tertentu"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/quiz",
    "description": "Buatkan kuis latihan untuk menguji tingkat pemahaman"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/stepbystep",
    "description": "Instruksi langkah demi langkah secara runtut dan sistematis"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/walkthrough",
    "description": "Panduan praktik langsung ditemani dari awal sampai akhir"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/beginner",
    "description": "Versi penjelasan ramah untuk pemula yang awam total"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/advanced",
    "description": "Tingkat mahir mendalam untuk yang sudah berpengalaman"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/learningpath",
    "description": "Kurikulum dan jalur pembelajaran bertahap progresif"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/studyplan",
    "description": "Rencana dan jadwal belajar terstruktur dengan alokasi waktu"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/mnemonics",
    "description": "Jembatan keledai atau formula akronim mudah menghafal"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/practice",
    "description": "Latihan praktis mandiri untuk mengasah keahlian"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/mistakes",
    "description": "Daftar kesalahan umum pemula dan solusi menghindarinya"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/dosanddonts",
    "description": "Panduan komparasi hal boleh vs hal dilarang"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/bestpractice",
    "description": "Standar baku terbaik sesuai patokan industri profesional"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/notes",
    "description": "Rangkuman catatan rapi dan terstruktur dari teks panjang"
  },
  {
    "category": "Memahami & Mempelajari Topik Sulit",
    "command": "/keypoints",
    "description": "Ekstrak intisari poin-poin paling penting saja"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/script30",
    "description": "Skrip video cepat dengan durasi tepat 30 detik"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/script60",
    "description": "Skrip video padat durasi tepat 60 detik"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/script90",
    "description": "Skrip video edukasi atau bercerita durasi 90 detik"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/script180",
    "description": "Skrip video komprehensif mendalam durasi 3 menit"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/hook",
    "description": "Kalimat pembuka memikat untuk 3 detik pertama video"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/hook10",
    "description": "10 variasi opsi hook pembuka dari satu ide topik"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/viralhook",
    "description": "Hook psikologis penghenti scroll penonton secara instan"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/openloop",
    "description": "Trik membuat audiens penasaran menggantung di awal"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/patterninterrupt",
    "description": "Elemen pemutus kebosanan agar audiens tetap fokus"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/retention",
    "description": "Optimasi skrip guna meningkatkan grafik retensi video"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/retentioncurve",
    "description": "Membagi ritme emosi atau kejutan sepanjang video panjang"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/storytelling",
    "description": "Ubah data atau fakta kering menjadi alur narasi memikat"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/herojourney",
    "description": "Struktur narasi perjalanan pahlawan (Hero's Journey)"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/narration",
    "description": "Naskah narasi pengisi suara (voiceover) yang mengalir"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/voiceover",
    "description": "Gaya bahasa voiceover natural, santai, dan enak diucapkan"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/storyboard",
    "description": "Panduan visual adegan demi adegan (storyboard sketsa)"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/storyboardpro",
    "description": "Storyboard profesional detail tipe shot, audio, dan durasi"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/sceneplan",
    "description": "Rencana daftar adegan berdasarkan lokasi dan logistik"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/shotlist",
    "description": "Daftar ceklis pengambilan gambar kamera saat shooting"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/broll",
    "description": "Ide visual footage pendukung atau potongan video"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/cameraangles",
    "description": "Rekomendasi sudut kamera sesuai emosi adegan"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/transitions",
    "description": "Ide transisi antar adegan agar perpindahan mulus"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/cinematic",
    "description": "Perlakuan visual sinematik bergaya layar lebar"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/motiongraphics",
    "description": "Ide teks bergerak dan animasi grafis penjelas data"
  },
  {
    "category": "Naskah Skrip & Pembuatan Video",
    "command": "/monologue",
    "description": "Skrip monolog bicara langsung depan kamera"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/viralreel",
    "description": "Konsep Reels Instagram dirancang khusus untuk viral"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/viralshorts",
    "description": "Format Shorts yang dioptimasi algoritma YouTube Shorts"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/reels",
    "description": "Gaya pacing dan format khusus Instagram Reels"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/shorts",
    "description": "Adaptasi gaya penulisan cepat khas YouTube Shorts"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/tiktok",
    "description": "Gaya bahasa santai, kasual, dan cepat khas TikTok"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/instagram",
    "description": "Format penulisan caption dan struktur Feed / Carousel IG"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/caption",
    "description": "Teks deskripsi atau caption pendukung postingan medsos"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/caption10",
    "description": "10 pilihan gaya variasi caption berbeda siap pakai"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/hashtags",
    "description": "Rekomendasi hashtag relevan dan spesifik target niche"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/cta",
    "description": "Call To Action pemicu konversi dan respon komentar"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/engagement",
    "description": "Meningkatkan interaksi komentar dan shares penonton"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/shareworthy",
    "description": "Membuat konten bernilai tinggi yang memicu dibagikan"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/saveworthy",
    "description": "Membuat konten kaya insight yang wajib disimpan"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/thumbnailtext",
    "description": "Teks singkat pemantik penasaran di thumbnail"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/commentbait",
    "description": "Pertanyaan pemicu diskusi dan debat aktif di kolom komen"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/titles",
    "description": "Opsi judul memikat pengundang klik"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/headline",
    "description": "Judul tajam pemikat atensi dalam sekali pandang"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/thumbnailaudit",
    "description": "Evaluasi kelemahan dan rekomendasi perbaikan thumbnail"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/titleaudit",
    "description": "Uji efektivitas daya tarik dan kejelasan judul video"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/contentaudit",
    "description": "Analisis mendalam mengapa konten sepi penonton"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/contentcalendar",
    "description": "Jadwal perencanaan konten mingguan atau bulanan"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/postingplan",
    "description": "Rencana waktu dan strategi distribusi lintas platform"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/series",
    "description": "Ide konsep konten bersambung atau berseri"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/repurpose",
    "description": "Pecah satu konten panjang menjadi belasan konten micro"
  },
  {
    "category": "Media Sosial & Strategi Pertumbuhan",
    "command": "/trend",
    "description": "Menunggangi tren viral terkini disesuaikan dengan niche"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/imageprompt",
    "description": "Ubah ide mentah menjadi prompt visual komplit dan detail"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/photorealistic",
    "description": "Gaya foto realistis seperti jepretan kamera profesional"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/cinematicphoto",
    "description": "Tampilan still cut film berkelas dengan atmosfer sinematik"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/portrait",
    "description": "Foto potret manusia natural dengan tekstur detail"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/headshot",
    "description": "Foto profil korporat profesional untuk avatar atau bio"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/editorial",
    "description": "Estetika tinggi ala majalah fashion atau tren seni visual"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/productphoto",
    "description": "Foto produk komersial berkualitas katalog studio mewah"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/macrophoto",
    "description": "Foto jarak dekat super detail (macro photography)"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/goldenhour",
    "description": "Pencahayaan hangat keemasan saat senja matahari turun"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/bluehour",
    "description": "Pencahayaan biru temaram tenang setelah matahari terbenam"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/dramaticlighting",
    "description": "Pencahayaan kontras tinggi dramatis (chiaroscuro)"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/volumetriclight",
    "description": "Efek berkas sinar menembus kabut atau udara (God rays)"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/rimlight",
    "description": "Cahaya garis tepi penegas kontur pemisah latar gelap"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/backlit",
    "description": "Pencahayaan dari belakang objek, efek siluet artistik"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/bokeh",
    "description": "Latar blur artistik dengan bulatan bola cahaya"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/depthoffield",
    "description": "Kedalaman ruang sempit, fokus tajam pada satu titik"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/wideangle",
    "description": "Sudut pandang lensa lebar menangkap luasnya ruang"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/telephoto",
    "description": "Lensa telephoto, efek latar mampat dan dekat"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/lowangle",
    "description": "Kamera sudut bawah memberi kesan megah dan berkuasa"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/topdown",
    "description": "Jepretan tegak lurus dari atas meja (flatlay bersih)"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/filmgrain",
    "description": "Tekstur butiran film analog klasik retro bernyawa"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/kodak",
    "description": "Nuansa warna hangat dan tone khas roll film Kodak jadul"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/polaroid",
    "description": "Estetika foto kamera instan Polaroid vintage"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/moody",
    "description": "Atmosfer gelap, emosional, melankolis, dan sinematik"
  },
  {
    "category": "Pembuatan Gambar AI / Image Prompt",
    "command": "/neon",
    "description": "Pencahayaan lampu neon gemerlap cyberpunk malam hari"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/rewrite",
    "description": "Tulis ulang kalimat agar mengalir tanpa mengubah arti"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/improve",
    "description": "Tingkatkan kualitas, kejelasan, dan daya tarik tulisan"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/shorten",
    "description": "Pangkas tulisan lebih ringkas tanpa membuang poin inti"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/expand",
    "description": "Kembangkan ide singkat jadi tulisan detail dan berbobot"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/paraphrase",
    "description": "Ganti variasi kalimat berbeda agar tidak repetitif"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/proofread",
    "description": "Koreksi ejaan, tata bahasa, dan typo secara presisi"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/casual",
    "description": "Ubah gaya bahasa menjadi kasual, akrab, dan santai"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/persuasive",
    "description": "Gaya penulisan persuasif yang meyakinkan pembaca"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/brandvoice",
    "description": "Tulis sesuai karakter nada suara brand"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/copywriter",
    "description": "Naskah copywriting profesional siap tingkatkan konversi"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/landingpage",
    "description": "Naskah penawaran lengkap untuk halaman Landing Page"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/salespage",
    "description": "Naskah lengkap Sales Page untuk produk digital atau fisik"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/emailmarketing",
    "description": "Naskah email promosi atau broadcast yang memikat klik"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/newsletter",
    "description": "Format surat buletin informatif untuk audiens email"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/coldemail",
    "description": "Email penawaran kolaborasi atau kerja sama profesional"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/offer",
    "description": "Merancang penawaran yang irresistible"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/usp",
    "description": "Unique Selling Proposition atau pembeda unik dalam 1 kalimat"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/valueprop",
    "description": "Proposisi nilai manfaat utama bagi calon pembeli"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/positioning",
    "description": "Penentuan posisi produk unik di tengah kompetisi pasar"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/branding",
    "description": "Strategi citra, positioning, dan identitas merek"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/pitch",
    "description": "Presentasi singkat dan padat (Elevator Pitch 60 detik)"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/campaign",
    "description": "Rencana kampanye pemasaran komplit multi-minggu"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/launch",
    "description": "Strategi tahapan peluncuran produk"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/blog",
    "description": "Artikel blog yang informatif, mendalam, dan terstruktur"
  },
  {
    "category": "Copywriting, Penulisan & Penjualan",
    "command": "/seo",
    "description": "Optimasi kata kunci artikel agar ranking di Google"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/actionplan",
    "description": "Rencana aksi pelaksanaan langkah demi langkah konkret"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/checklist",
    "description": "Daftar ceklis kontrol sebelum eksekusi pekerjaan penting"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/template",
    "description": "Templat baku reusable yang bisa dipakai berulang kali"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/outline",
    "description": "Garis besar kerangka struktur materi menyeluruh"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/todo",
    "description": "Daftar tugas terperinci siap eksekusi"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/prioritize",
    "description": "Pilah dan urutkan daftar tugas berdasar skala prioritas"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/roadmap",
    "description": "Peta jalan strategi pengembangan proyek"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/roadmap90",
    "description": "Rencana strategi pencapaian target selama 90 hari"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/milestones",
    "description": "Tahapan penanda pencapaian penting proyek"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/smartgoals",
    "description": "Penetapan target metode SMART (Spesifik dan Terukur)"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/okr",
    "description": "Objectives and Key Results, target terukur kuartalan"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/kpi",
    "description": "Indikator Kinerja Utama pengukur keberhasilan"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/metrics",
    "description": "Identifikasi metrik data yang wajib dipantau dan urgensinya"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/estimate",
    "description": "Estimasi alokasi waktu dan kebutuhan tenaga pengerjaan"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/budget",
    "description": "Rancangan alokasi anggaran belanja dan biaya produksi"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/agenda",
    "description": "Susunan agenda rapat atau diskusi agar fokus dan efektif"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/meetingsummary",
    "description": "Rangkuman inti poin keputusan dari transkrip rapat"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/minutes",
    "description": "Notulen resmi rapat: kesepakatan dan penanggung jawab"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/sop",
    "description": "Standard Operating Procedure alur pengerjaan konsisten"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/playbook",
    "description": "Panduan SOP taktis penanganan skenario khusus"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/guide",
    "description": "Panduan tutorial praktis penggunaan alat atau software"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/faq",
    "description": "Daftar Tanya Jawab yang Sering Diajukan audiens"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/table",
    "description": "Ubah data acak atau teks berantakan menjadi tabel rapi"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/extract",
    "description": "Ekstrak entitas data spesifik seperti angka, kontak, tanggal"
  },
  {
    "category": "Manajemen Kerja & Produktivitas",
    "command": "/presentation",
    "description": "Kerangka slide demi slide materi presentasi atau deck"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/brainstorm",
    "description": "Brainstorming eksplorasi ide bebas tanpa batasan filter"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/ideas10",
    "description": "10 ide topik spesifik, segar, dan aplikatif"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/ideas50",
    "description": "50 ide cepat untuk disaring dan dipilih"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/remix",
    "description": "Adaptasi formula sukses konten viral ke niche kamu"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/combine",
    "description": "Gabungkan 2 konsep berbeda jadi 1 format unik baru"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/alternate",
    "description": "Cari alternatif pendekatan materi dari sudut berbeda"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/devilsadvocate",
    "description": "Mengambil posisi kontra untuk menguji kelemahan ide"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/counterargument",
    "description": "Menyusun sanggahan tajam penguji keyakinan"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/critique",
    "description": "Kritik objektif, tajam, dan jujur tanpa basa-basi"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/redteam",
    "description": "Uji ketahanan rencana dengan mencari celah kegagalan"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/premortem",
    "description": "Simulasi proyek gagal total dan evaluasi penyebabnya"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/rootcause",
    "description": "Mencari akar masalah sebenarnya di balik suatu kendala"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/fivewhys",
    "description": "Metode 5 Mengapa untuk menemukan akar masalah terdalam"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/proscons",
    "description": "Daftar keuntungan vs kerugian objektif dari opsi"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/tradeoffs",
    "description": "Analisis konsekuensi hal yang didapat vs dikorbankan"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/decisionmatrix",
    "description": "Matriks keputusan terbobot untuk menentukan opsi"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/bestoption",
    "description": "Pilih 1 keputusan paling rasional dan kuat secara logika"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/validate",
    "description": "Uji kelayakan apakah ide masuk akal untuk dieksekusi"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/assumptions",
    "description": "Bongkar asumsi-asumsi tersembunyi yang berisiko keliru"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/constraints",
    "description": "Rencana solusi di tengah keterbatasan modal dan waktu"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/reverseengineer",
    "description": "Bongkar formula di balik kesuksesan konten"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/swot",
    "description": "Analisis Kekuatan, Kelemahan, Peluang, dan Ancaman (SWOT)"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/scenario",
    "description": "Simulasi berbagai skenario buruk dan langkah antisipasi"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/mentor",
    "description": "Nasihat strategis dan dorongan mindset ala mentor senior"
  },
  {
    "category": "Pemecahan Masalah & Pengambilan Keputusan",
    "command": "/promptaudit",
    "description": "Evaluasi dan tingkatkan efektivitas prompt AI"
  }
];

const list = document.getElementById("list");
const search = document.getElementById("search");
const category = document.getElementById("category");

[...new Set(commands.map(x => x.category))].forEach(c => {
  const option = document.createElement("option");
  option.value = c;
  option.textContent = c;
  category.appendChild(option);
});

function render() {
  const q = search.value.toLowerCase().trim();
  const cat = category.value;

  const filtered = commands.filter(x =>
    (cat === "all" || x.category === cat) &&
    (x.command.toLowerCase().includes(q) ||
     x.description.toLowerCase().includes(q) ||
     x.category.toLowerCase().includes(q))
  );

  list.innerHTML = "";

  if (!filtered.length) {
    list.innerHTML = '<div class="empty">Kode tidak ditemukan.</div>';
    return;
  }

  filtered.forEach(x => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="category">${x.category}</div>
      <div class="command">${x.command}</div>
      <div class="desc">${x.description}</div>
    `;
    card.onclick = () => {
      navigator.clipboard.writeText(x.command + " ");
      card.animate(
        [{transform:"scale(1)"},{transform:"scale(.98)"},{transform:"scale(1)"}],
        {duration:180}
      );
    };
    list.appendChild(card);
  });
}
search.addEventListener("input", render);
category.addEventListener("change", render);
render();
