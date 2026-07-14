import type { ProductListPageData } from "@/types/product";

export const breathalyzerPageData: ProductListPageData = {
  breadcrumb: [
    { label: "產品介紹" },
    { label: "酒測器" },
  ],
  title: "酒測器",
  heroImage: {
    src: "/images/product/kv.jpg",
    alt: "Breathalyzer",
    width: 1200,
    height: 400,
  },
  categories: [
    { id: "ignition-locking", label: "Ignition Locking Device" },
    { id: "evidence", label: "Evidence Devices" },
    { id: "screening", label: "Screening Devices" },
    { id: "system", label: "System Devices" },
  ],
  products: [
    {
      id: "alx3000",
      slug: "alx3000",
      name: "ALX3000",
      categoryId: "ignition-locking",
      image: {
        src: "/images/product/ALX3000/ALX3000_maincopy.png",
        alt: "ALX3000",
      },
      brand: "ALCOSCAN",
      summary:
        "ALX3000 是一款使用燃料電池式酒精感測器的呼氣酒精測試儀，並搭載汽車點火連鎖裝置。",
      description: [
        "ALX3000 是一款使用燃料電池式酒精感測器的呼氣酒精測試儀，並搭載汽車點火連鎖裝置。",
        "安裝 ALX3000 後，駕駛在進入車內時必須先進行酒精測試，並依分析結果控制點火。",
        "與以往的點火連鎖裝置不同，ALX3000 的價格更合理。",
      ],
      gallery: [
        {
          src: "/images/product/ALX3000/ALX3000_maincopy.png",
          alt: "ALX3000 主圖",
        },
        {
          src: "/images/product/ALX3000/ALX3000_subcopy.png",
          alt: "ALX3000 副圖",
        },
      ],
      specifications: [
        { label: "酒精濃度顯示", value: "PASS, FAIL" },
        { label: "感測器類型", value: "燃料電池式酒精感測器" },
        { label: "電源", value: "DC 12V ~ 24V" },
        {
          label: "操作與儲存溫度",
          value: "-40℃ ~ 85℃（-40℉ ~ 185℉）",
        },
        { label: "濕度", value: "20% ~ 98%" },
        { label: "校正週期", value: "主要為 12 個月" },
        {
          label: "重量",
          value: "手持裝置：135g／控制盒：650g",
        },
        {
          label: "尺寸",
          value:
            "手持裝置：160mm (W) × 58mm (L) × 34mm (H)；控制盒：108mm (W) × 158mm (L) × 38mm (H)",
        },
        {
          label: "認證",
          value:
            "EN 50436-1: 2014 / EN 50436-2: 2014 / E Mark(E11) / IATF 16949: 2016",
        },
      ],
    },
    {
      id: "isober-s-pro",
      slug: "isober-s-pro",
      name: "isober S Pro",
      categoryId: "evidence",
      image: {
        src: "/images/product/iSOBERS-S-Pro/iSOBERSPro.png",
        alt: "isober S Pro",
      },
      summary:
        "iSOBER S 是 iSOBER 系列中的高階呼氣酒精測試儀。",
      description: [
        "iSOBER S 是 iSOBER 系列中的高階呼氣酒精測試儀。",
        "其緊湊的機身設計，適合自我檢測者、工作人員或駕駛使用。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.00 ~ 4.00 g/L (‰)／0.00 ~ 0.40 %BAC／0.00 ~ 2.00 mg/L／000 ~ 400 mg/100mL",
        },
        {
          label: "感測器類型",
          value: "燃料電池式酒精感測器（FULL SIZE）",
        },
        {
          label: "電源",
          value: "2 顆 AAA 鹼性電池",
        },
        {
          label: "重量",
          value: "82.7g（含電池）",
        },
        {
          label: "尺寸",
          value: "51mm（寬）× 105mm（高）× 17mm（厚）",
        },
        {
          label: "預熱時間",
          value: "5～120 秒",
        },
        {
          label: "測量分析時間",
          value: "5 秒內（0.050%BAC，24°C）",
        },
        {
          label: "準確度",
          value: "±5%（0.050%BAC）",
        },
        {
          label: "操作溫度",
          value: "-40℃ ~ 85℃（-40℉ ~ 185℉）",
        },
        {
          label: "儲存溫度",
          value: "-10℃ ~ 50℃",
        },
        {
          label: "吹嘴",
          value: "MP1000",
        },
      ],
    },
    {
      id: "alp-1-lite",
      slug: "alp-1-lite",
      name: "ALP-1 Lite",
      categoryId: "evidence",
      image: {
        src: "/images/product/ALP-1-Lite/ALP-1Lite.png",
        alt: "ALP-1 Lite",
      },
      summary:
        "ALP-1 Lite 是一款高階的專業呼氣酒精測試儀，用於測量人體呼氣中的酒精。",
      description: [
        "ALP-1 Lite 是一款高階的專業呼氣酒精測試儀，用於測量人體呼氣中的酒精。",
        "內建燃料電池感測器技術，具備最佳準確度。",
        "測試結果可儲存在 ALP-1 Lite 中，也可以透過有線行動印表機列印輸出。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.00 ~ 5.000‰／0.00 ~ 0.500 %BAC／0.00 ~ 2.500 mg/L（LCD 顯示）",
        },
        {
          label: "感測器類型",
          value: "SURACELL 燃料電池型酒精感測器",
        },
        {
          label: "電源",
          value: "2 × AA 鹼性電池",
        },
        {
          label: "重量",
          value: "180g（含電池）",
        },
        {
          label: "尺寸",
          value: "64mm（寬）× 133mm（高）× 33mm（厚）",
        },
        {
          label: "預熱時間",
          value: "5～120 秒",
        },
        {
          label: "測量分析時間",
          value: "5 秒內（0.050%BAC）",
        },
        {
          label: "準確度",
          value: "±5%（0.050%BAC）",
        },
        {
          label: "操作溫度",
          value: "-5℃ ~ 40℃（選配加熱系統可達 -10℃ ~ 50℃）",
        },
        {
          label: "吹嘴",
          value: "MP-1",
        },
        {
          label: "記憶容量",
          value: "2,500 筆",
        },
        {
          label: "附加功能",
          value: "支援有線印表機與 PC（SENTECH VIEW / MAX30）",
        },
      ],
    },
    {
      id: "alp-1",
      slug: "alp-1",
      name: "ALP-1",
      categoryId: "evidence",
      image: {
        src: "/images/product/ALP-1/ALP-1_maincopy.png",
        alt: "ALP-1",
      },
      summary:
        "ALP-1 是一款採用燃料電池感測器技術的高階專業呼氣酒精測試儀。",
      description: [
        "採用燃料電池感測器技術，ALP-1 是一款高階升級版專業呼氣酒精測試儀，用於測量人體呼氣中的酒精。",
        "內建燃料電池感測器技術，具備最佳精準度。",
        "測試結果可儲存在 ALP-1 中，也可透過無線連接的行動印表機列印。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.000 ~ 5.000‰／0.000 ~ 0.500%BAC／0.000 ~ 2.500 mg/L BrAC／0.000 ~ 5.000 g/L",
        },
        {
          label: "感測器類型",
          value: "燃料電池式酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 AA 1.5V 鹼性電池",
        },
        {
          label: "重量",
          value: "198g（含電池）",
        },
        {
          label: "尺寸",
          value: "64mm（寬）× 133mm（高）× 33mm（厚）",
        },
        {
          label: "測量記憶",
          value: "約 500 次",
        },
        {
          label: "測量分析時間",
          value: "反應 3～5 秒；恢復時間 <10 秒（0.100%BAC）",
        },
        {
          label: "測量模式",
          value: "一般、快速、被動模式",
        },
        {
          label: "準確度",
          value: "±0.005%BAC（0.100%BAC）",
        },
        {
          label: "操作溫度",
          value: "-5℃ ~ 40℃",
        },
        {
          label: "儲存溫度",
          value: "-10℃ ~ 50℃",
        },
        {
          label: "吹嘴",
          value: "MP-1（雙面可使用）",
        },
        {
          label: "顏色",
          value: "黑色",
        },
        {
          label: "警示音",
          value: "LED 搭配三段式蜂鳴警示",
        },
      ],
      gallery: [
        {
          src: "/images/product/ALP-1/ALP-1_maincopy.png",
          alt: "ALP-1 主圖",
        },
        {
          src: "/images/product/ALP-1/ALP-1_subcopy.png",
          alt: "ALP-1 副圖",
        },
      ],
    },
    {
      id: "alc-1",
      slug: "alc-1",
      name: "ALC-1",
      categoryId: "system",
      image: {
        src: "/images/product/ALC-1/ALC-1_maincopy.png",
        alt: "ALC-1",
      },
      summary: "緊湊型酒精檢測系統，操作簡單，並具備隱藏式個人吹嘴。",
      description: [
        "緊湊型設計。",
        "操作簡單。",
        "具備隱藏式個人吹嘴。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.000 ~ 4.000‰／0.000 ~ 2.000 mg/L／0.000 ~ 0.400 %BAC（LCD 顯示）",
        },
        {
          label: "感測器類型",
          value: "燃料電池酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 AAA 1.5V 鹼性電池",
        },
        {
          label: "重量",
          value: "85g（含電池）",
        },
        {
          label: "尺寸",
          value: "50mm（寬）× 105mm（高）× 15mm（厚）",
        },
        {
          label: "暖機與反應時間",
          value: "5 秒～2 分鐘；0.10 %BAC 時 10 秒內完成反應",
        },
        {
          label: "準確度",
          value: "±0.005 %BAC（0.050 %BAC）",
        },
        {
          label: "操作溫度",
          value: "5℃ ~ 40℃",
        },
        {
          label: "儲存溫度",
          value: "0℃ ~ 50℃",
        },
        {
          label: "吹嘴",
          value: "需使用專用吹嘴",
        },
      ],
      gallery: [
        {
          src: "/images/product/ALC-1/ALC-1_maincopy.png",
          alt: "ALC-1 主圖",
        },
        {
          src: "/images/product/ALC-1/ALC-1_subcopy.png",
          alt: "ALC-1 副圖",
        },
      ],
    },
    {
      id: "alc-2",
      slug: "alc-2",
      name: "ALC-2",
      categoryId: "system",
      image: {
        src: "/images/product/ALC-2/ALC-2_maincopy.png",
        alt: "ALC-2",
      },
      summary: "緊湊型酒精檢測系統，操作簡單，並具備隱藏式個人吹嘴。",
      description: [
        "緊湊型設計。",
        "操作簡單。",
        "具備隱藏式個人吹嘴。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "0.000 ~ 0.400 %BAC",
        },
        {
          label: "感測器類型",
          value: "Suracell 電化學式酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 AAA 1.5V 鹼性電池",
        },
        {
          label: "重量",
          value: "83g（含電池）",
        },
        {
          label: "尺寸",
          value: "50mm（寬）× 105mm（高）× 15mm（厚）",
        },
        {
          label: "暖機時間",
          value: "2 分鐘內",
        },
        {
          label: "準確度",
          value: "±0.005 %BAC（0.050 %BAC）",
        },
        {
          label: "操作溫度",
          value: "5℃ ~ 40℃",
        },
        {
          label: "儲存溫度",
          value: "0℃ ~ 50℃",
        },
        {
          label: "吹嘴",
          value: "MP6000／內部吹嘴",
        },
        {
          label: "感測器保固",
          value: "1 年（不含人為損壞）",
        },
      ],
      gallery: [
        {
          src: "/images/product/ALC-2/ALC-2_maincopy.png",
          alt: "ALC-2 主圖",
        },
        {
          src: "/images/product/ALC-2/ALC-2_subcopy.png",
          alt: "ALC-2 副圖",
        },
      ],
    },
    {
      id: "al7010",
      slug: "al7010",
      name: "AL7010",
      categoryId: "screening",
      image: {
        src: "/images/product/AL7010/AL7010.png",
        alt: "AL7010",
      },
      summary: "AL7010 是設計用於測量人體呼氣中酒精濃度的設備。",
      description: [
        "AL7010 是設計用於測量人體呼氣中酒精濃度的設備。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.000 ~ 0.400 %BAC／0.000 ~ 4.000‰／0.000 ~ 2.000 mg/L BrAC（LCD 顯示）",
        },
        {
          label: "感測器類型",
          value: "氧化物半導體型酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 AA 1.5V 鹼性電池",
        },
        {
          label: "重量",
          value: "98g（含電池）",
        },
        {
          label: "尺寸",
          value: "50mm（寬）× 105mm（高）× 18mm（厚）",
        },
        {
          label: "操作溫度",
          value: "0℃ ~ 40℃",
        },
        {
          label: "準確度",
          value: "±0.01 %BAC（最高至 0.05%BAC）",
        },
        {
          label: "吹嘴",
          value: "必須使用吹嘴",
        },
        {
          label: "顏色",
          value: "黑色",
        },
      ],
    },
    {
      id: "al1100f",
      slug: "al1100f",
      name: "AL1100F",
      categoryId: "screening",
      image: {
        src: "/images/product/AL1100F/AL1100F.png",
        alt: "AL1100F",
      },
      summary: "AL1100F 採用高靈敏度燃料電池感測器，適合快速檢測微量酒精。",
      description: [
        "搭載高靈敏度燃料電池酒精感測器。",
        "特別適用於快速檢查人體呼氣中的少量酒精成分。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "高：>0.60‰／>0.06%BAC／>0.30mg/L BrAC；低：0.30~0.60‰／0.03~0.06%BAC／0.15~0.30mg/L BrAC；安全：<0.30‰／<0.03%BAC／<0.15mg/L BrAC",
        },
        {
          label: "感測器類型",
          value: "燃料電池酒精感測器",
        },
        {
          label: "電源",
          value: "可充電鋰離子電池組",
        },
        {
          label: "重量",
          value: "140g（含電池）",
        },
        {
          label: "尺寸",
          value: "56.6mm（寬）× 140mm（高）× 25mm（厚）",
        },
        {
          label: "暖機與反應時間",
          value: "10 秒／5 秒",
        },
        {
          label: "操作溫度",
          value: "-5℃ ~ 40℃",
        },
        {
          label: "儲存溫度",
          value: "-10℃ ~ 60℃",
        },
        {
          label: "準確度",
          value: "酒精檢測率 >80%（0.30‰）",
        },
        {
          label: "吹嘴",
          value: "無需使用吹嘴",
        },
        {
          label: "手動採樣測試",
          value: "可使用",
        },
        {
          label: "聲音警示",
          value: "LED 三段式蜂鳴警示",
        },
        {
          label: "顏色",
          value: "海軍藍",
        },
        {
          label: "認證",
          value: "CE",
        },
      ],
    },
    {
      id: "al6000-lite",
      slug: "al6000-lite",
      name: "AL6000 Lite",
      categoryId: "screening",
      image: {
        src: "/images/product/AL6000-Lite/AL6000Lite_maincopy.png",
        alt: "AL6000 Lite",
      },
      summary: "AL6000 Lite 是一款手持式可攜帶呼氣酒精測試儀。",
      description: [
        "手持式可攜帶呼氣酒精測試儀。",
        "可提供可靠且準確的呼氣酒精濃度檢測結果。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.000 ~ 4.000‰／0.000 ~ 0.400%BAC／0.000 ~ 2.000 mg/L BrAC（LCD 顯示）",
        },
        {
          label: "感測器類型",
          value: "半導體型酒精感測器",
        },
        {
          label: "電源",
          value: "2 × AA 1.5V 鹼性電池（自動關機）",
        },
        {
          label: "重量",
          value: "115g（含電池）",
        },
        {
          label: "尺寸",
          value: "56mm（寬）× 124mm（高）× 41mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.01%BAC（0.05%BAC）",
        },
        {
          label: "吹嘴",
          value: "MP6000",
        },
        {
          label: "聲音警示",
          value: "三段式蜂鳴警示（LED 顯示）",
        },
        {
          label: "顏色",
          value: "綠色／黑色",
        },
        {
          label: "認證",
          value: "CE、FDA 510K Listed、DOT、Australian Standard",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL6000-Lite/AL6000Lite_maincopy.png",
          alt: "AL6000 Lite 主圖",
        },
        {
          src: "/images/product/AL6000-Lite/AL6000Lite_subcopy.png",
          alt: "AL6000 Lite 副圖",
        },
      ],
    },
    
    {
      id: "al4000",
      slug: "al4000",
      name: "AL4000",
      categoryId: "screening",
      image: {
        src: "/images/product/AL4000/AL4000_maincopy.png",
        alt: "AL4000",
      },
      summary: "AL4000 為投幣式呼氣酒精測試儀，適用於各種公共場所。",
      description: [
        "投幣式呼氣酒精測試儀。",
        "適用於酒吧、餐廳、夜店、賭場等任何與酒精相關的場所。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.000~5.000‰／0.000~0.500%BAC／0.000~2.500 mg/L BrAC（LCD 顯示）",
        },
        {
          label: "感測器類型",
          value: "燃料電池（電化學式）",
        },
        {
          label: "電源",
          value: "AC 110~220V，50/60Hz；DC 12V / 1.5A",
        },
        {
          label: "重量",
          value: "5.85 公斤",
        },
        {
          label: "尺寸",
          value: "410mm × 250mm × 115mm",
        },
        {
          label: "準確度",
          value: "±0.005%BAC（0.100%BAC）",
        },
        {
          label: "吹嘴",
          value: "圓柱形吸管",
        },
        {
          label: "投幣機構",
          value: "可客製化",
        },
        {
          label: "顏色",
          value: "黑色",
        },
        {
          label: "校正",
          value: "濕式／乾式模擬器或預校正感測器模組",
        },
        {
          label: "認證",
          value: "CE",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL4000/AL4000_maincopy.png",
          alt: "AL4000 主圖",
        },
        {
          src: "/images/product/AL4000/AL4000_subcopy.png",
          alt: "AL4000 副圖",
        },
      ],
    },
    {
      id: "al2500-elite",
      slug: "al2500-elite",
      name: "AL2500 Elite",
      categoryId: "screening",
      image: {
        src: "/images/product/AL2500elite/AL2500Elite_maincopy.png",
        alt: "AL2500 Elite",
      },
      summary: "AL2500 Elite 是一款高靈敏度且具可靠準確度的酒精檢測儀。",
      description: [
        "高靈敏度且具可靠準確度。",
        "特別適用於血液酒精濃度（B.A.C.）自我檢測。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.000 ~ 4.000‰／0.000 ~ 0.400%BAC／0.000 ~ 2.000 mg/L BrAC（LCD 顯示）",
        },
        {
          label: "感測器類型",
          value: "半導體型酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 AA 1.5V 鹼性電池（自動關機）",
        },
        {
          label: "重量",
          value: "85g（含電池）",
        },
        {
          label: "尺寸",
          value: "40mm（寬）× 104mm（高）× 20mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.01%BAC（0.05%BAC）",
        },
        {
          label: "吹嘴",
          value: "MP2500",
        },
        {
          label: "聲音警示",
          value: "LED 搭配三段式蜂鳴警示",
        },
        {
          label: "顏色",
          value: "黑色",
        },
        {
          label: "認證",
          value: "CE",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL2500elite/AL2500Elite_maincopy.png",
          alt: "AL2500 Elite 主圖",
        },
        {
          src: "/images/product/AL2500elite/AL2500Elite_subcopy.png",
          alt: "AL2500 Elite 副圖",
        },
      ],
    },
    {
      id: "al9000-lite",
      slug: "al9000-lite",
      name: "AL9000 Lite",
      categoryId: "screening",
      image: {
        src: "/images/product/AL9000Lite/AL9000Lite_maincopy.png",
        alt: "AL9000 Lite",
      },
      summary: "AL9000 Lite 是一款輕薄設計的可攜式燃料電池呼氣酒精測試儀。",
      description: [
        "採用燃料電池感測器。",
        "用於測量人體呼氣中的酒精。",
        "測量範圍：0.000 ~ 0.400 %BAC、0.000 ~ 4.000‰、0.000 ~ 2.000 mg/L BrAC。",
        "相較 AL9000，功能更加精簡。",
        "已通過 CE 認證。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "0.000 ~ 4.000‰／0.000 ~ 0.400 %BAC／0.000 ~ 2.000 mg/L BrAC（LCD 顯示）",
        },
        {
          label: "感測器類型",
          value: "燃料電池型酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 AAA 鹼性電池",
        },
        {
          label: "重量",
          value: "100g（含電池）",
        },
        {
          label: "尺寸",
          value: "50mm（寬）× 116mm（高）× 20mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.005 %BAC（0.05 %BAC）",
        },
        {
          label: "吹嘴",
          value: "MP1000",
        },
        {
          label: "聲音警示",
          value: "LED 三段式蜂鳴警示",
        },
        {
          label: "顏色",
          value: "黑色",
        },
        {
          label: "認證",
          value: "CE",
        },
      ],
    },
    
    {
      id: "al9000",
      slug: "al9000",
      name: "AL9000",
      categoryId: "screening",
      image: {
        src: "/images/product/AL9000/AL9000_maincopy.png",
        alt: "AL9000",
      },
      summary: "AL9000 採用燃料電池感測器技術，提供穩定且可靠的酒精濃度測量。",
      description: [
        "採用燃料電池感測器技術。",
        "用於測量人體呼氣中的酒精含量。",
        "提供穩定且可靠的測量結果。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "0.000 ~ 0.400 %BAC／0.000 ~ 4.000‰／0.000 ~ 2.000 mg/L BrAC（LCD 顯示）",
        },
        {
          label: "感測器類型",
          value: "燃料電池型酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 AAA 1.5V 鹼性電池",
        },
        {
          label: "重量",
          value: "100g（含電池）",
        },
        {
          label: "尺寸",
          value: "116mm（高）× 50mm（寬）× 20mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.005 %BAC（0.100 %BAC）",
        },
        {
          label: "吹嘴",
          value: "MP1000",
        },
        {
          label: "聲音警示",
          value: "LED 三段式蜂鳴警示",
        },
        {
          label: "顏色",
          value: "黑色",
        },
        {
          label: "認證",
          value: "CE",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL9000/AL9000_maincopy.png",
          alt: "AL9000 主圖",
        },
        {
          src: "/images/product/AL9000/AL9000-subcopy.png",
          alt: "AL9000 副圖",
        },
      ],
    },
    {
      id: "al8800bt",
      slug: "al8800bt",
      name: "AL8800BT",
      categoryId: "screening",
      image: {
        src: "/images/product/AL8800BT/IMG_6380984.png",
        alt: "AL8800BT",
      },
      summary: "AL8800BT 支援 Bluetooth BLE，可與 iSOBER App 連線管理測試資料。",
      description: [
        "支援 Bluetooth BLE。",
        "可與 iSOBER 智慧型手機 App 連線。",
        "可管理測試資料。",
        "可透過簡訊、社群媒體及電子郵件分享測試結果。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.00 ~ 5.00‰／0.00 ~ 0.50%BAC／0.00 ~ 2.50 mg/L／0 ~ 500 mg/100mL",
        },
        {
          label: "感測器類型",
          value: "燃料電池型酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 AAA 鹼性電池",
        },
        {
          label: "重量",
          value: "83g（含電池）",
        },
        {
          label: "尺寸",
          value: "53.8mm（寬）× 97.5mm（高）× 18mm（厚）",
        },
        {
          label: "預熱時間",
          value: "5～120 秒",
        },
        {
          label: "測量分析時間",
          value: "5 秒內（0.050%BAC，24°C）",
        },
        {
          label: "準確度",
          value: "±10%（0.050%BAC）",
        },
        {
          label: "操作溫度",
          value: "5℃ ~ 40℃",
        },
        {
          label: "儲存溫度",
          value: "0℃ ~ 50℃",
        },
        {
          label: "吹嘴",
          value: "MP1000",
        },
        {
          label: "附加功能",
          value:
            "支援 iSOBER App、Bluetooth BLE，可透過 SMS／SNS／E-mail 分享測試結果",
        },
      ],
    },
    {
      id: "iblow10-c",
      slug: "iblow10-c",
      name: "iblow10-C",
      categoryId: "screening",
      image: {
        src: "/images/product/iblow10-C/iblow10-C_400_550.png",
        alt: "iblow10-C",
      },
      summary: "非接觸式呼氣酒精測試裝置，可避免受測者與設備直接接觸。",
      description: [
        "非接觸式呼氣酒精測試裝置。",
        "透過受測者呼氣（飛沫）進行量測。",
        "避免受測者與設備之間的直接接觸。",
      ],
      specifications: [
        {
          label: "感測器類型",
          value: "電化學酒精感測器、CO₂ 光電二極體感測器",
        },
        {
          label: "電源",
          value: "5000mAh 鋰聚合物電池",
        },
        {
          label: "重量",
          value: "426g",
        },
        {
          label: "尺寸",
          value: "49 × 350 × 51 mm（不含採樣管）",
        },
        {
          label: "測量速度",
          value: "每分鐘最多 10 人",
        },
        {
          label: "操作溫度",
          value: "-5°C ~ 40°C",
        },
        {
          label: "儲存溫度",
          value: "-10°C ~ 40°C",
        },
        {
          label: "吹嘴",
          value: "集氣／防潮採樣裝置",
        },
        {
          label: "校正週期",
          value: "5000 次或 6 個月",
        },
        {
          label: "產品特性",
          value: "LED 警示燈、電量顯示、校正提醒、鎖定功能",
        },
      ],
      gallery: [
        {
          src: "/images/product/iblow10-C/iblow10-C_400_550.png",
          alt: "iblow10-C 主圖",
        },
        {
          src: "/images/product/iblow10-C/iblow10-C_400_550_2.png",
          alt: "iblow10-C 副圖",
        },
      ],
    },
    {
      id: "al1100",
      slug: "al1100",
      name: "AL1100",
      categoryId: "screening",
      image: {
        src: "/images/product/AL1100/AL1100_maincopy.png",
        alt: "AL1100",
      },
      summary: "AL1100 為高靈敏度酒精檢測器，適合快速檢測微量酒精。",
      description: [
        "高靈敏度酒精檢測器。",
        "特別適用於快速檢測人體呼氣中的少量酒精成分。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "高：>0.50‰／>0.05%BAC／>0.25mg/L BrAC；低：0.20~0.50‰／0.02~0.05%BAC／0.10~0.25mg/L BrAC；無酒精：<0.20‰／<0.02%BAC／<0.10mg/L BrAC",
        },
        {
          label: "感測器類型",
          value: "半導體型酒精感測器",
        },
        {
          label: "電源",
          value: "可充電電池組",
        },
        {
          label: "重量",
          value: "180g（含電池）",
        },
        {
          label: "尺寸",
          value: "75mm（寬）× 150mm（高）× 24mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.01 %BAC（0.05 %BAC）",
        },
        {
          label: "吹嘴",
          value: "無需使用吹嘴",
        },
        {
          label: "聲音警示",
          value: "LED 三段式蜂鳴警示",
        },
        {
          label: "顏色",
          value: "銀色",
        },
        {
          label: "認證",
          value: "CE、KRISS、RTSA",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL1100/AL1100_maincopy.png",
          alt: "AL1100 主圖",
        },
        {
          src: "/images/product/AL1100/AL1100_subcopy.png",
          alt: "AL1100 副圖",
        },
      ],
    },
    {
      id: "iblow10",
      slug: "iblow10",
      name: "iblow10",
      categoryId: "screening",
      image: {
        src: "/images/product/iblow10/iblow10_maincopy.png",
        alt: "iblow10",
      },
      summary: "快速大量篩檢型酒精測試儀，每分鐘可測試約 12 人。",
      description: [
        "可快速且準確測量受測者酒精濃度。",
        "每分鐘可測試約 12 人。",
        "測試結果以數值及 Zero／Low／High 等級顯示。",
      ],
      specifications: [
        {
          label: "感測器類型",
          value: "Suracell™ 燃料電池感測器",
        },
        {
          label: "電源",
          value: "6 顆 AA 鹼性電池或充電電池",
        },
        {
          label: "重量",
          value: "370g（含電池）",
        },
        {
          label: "尺寸",
          value: "44.5 × 276 × 44.5 mm",
        },
        {
          label: "測量速度",
          value: "每分鐘最多 12 人",
        },
        {
          label: "操作溫度",
          value: "-5°C ~ 55°C",
        },
        {
          label: "儲存溫度",
          value: "-10°C ~ 60°C",
        },
        {
          label: "吹嘴",
          value: "可更換、可清洗被動式吹帽",
        },
        {
          label: "校正週期",
          value: "5000 次或 12 個月",
        },
        {
          label: "產品特性",
          value: "LED 照明、校正提醒、PC 校正保護、電量顯示",
        },
      ],
      gallery: [
        {
          src: "/images/product/iblow10/iblow10_maincopy.png",
          alt: "iblow10 主圖",
        },
        {
          src: "/images/product/iblow10/iblow10_subcopy.png",
          alt: "iblow10 副圖",
        },
      ],
    },
    {
      id: "iblow10-pro",
      slug: "iblow10-pro",
      name: "iblow10 Pro",
      categoryId: "screening",
      image: {
        src: "/images/product/iblow10-Pro/maincopy.png",
        alt: "iblow10 Pro",
      },
      summary: "高速非接觸式酒精測試儀，支援 App、BLE 與 TFT LCD。",
      description: [
        "每分鐘可測試約 12 人。",
        "TFT LCD 顯示。",
        "支援 iSOBER App。",
        "支援 Bluetooth BLE。",
        "可充電鋰電池。",
        "支援客製化 Logo。",
      ],
      specifications: [
        {
          label: "感測器類型",
          value: "SuraCell™ 燃料電池感測器",
        },
        {
          label: "電源",
          value: "3.7V / 1200mAh 鋰聚合物電池",
        },
        {
          label: "重量",
          value: "約 260g（含電池）",
        },
        {
          label: "尺寸",
          value: "44.5 × 276 × 44.5 mm",
        },
        {
          label: "測量速度",
          value: "每分鐘最多 12 人",
        },
        {
          label: "操作溫度",
          value: "-15°C ~ 55°C",
        },
        {
          label: "儲存溫度",
          value: "-20°C ~ 60°C",
        },
        {
          label: "測量記憶",
          value: "5000 筆",
        },
        {
          label: "校正週期",
          value: "5000 次或 12 個月",
        },
        {
          label: "附加功能",
          value:
            "藍牙、多語言、Web 校正保護、LED 信號棒、磁吸固定",
        },
      ],
      gallery: [
        {
          src: "/images/product/iblow10-Pro/maincopy.png",
          alt: "iblow10 Pro 主圖",
        },
        {
          src: "/images/product/iblow10-Pro/subcopy.png",
          alt: "iblow10 Pro 副圖",
        },
      ],
    },
    {
      id: "al8000",
      slug: "al8000",
      name: "AL8000",
      categoryId: "screening",
      image: {
        src: "/images/product/AL8000/AL8000_maincopy.png",
        alt: "AL8000",
      },
      summary: "採用燃料電池感測器技術，提供高精準度酒精量測。",
      description: [
        "採用燃料電池感測器技術。",
        "提供高準確度酒精量測。",
        "提供多種顏色選擇。",
        "小型設計，方便攜帶。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "0.00 ~ 0.40 %BAC（LCD 顯示器與蜂鳴聲）",
        },
        {
          label: "感測器類型",
          value: "電化學式小型感測器（燃料電池感測器）",
        },
        {
          label: "電源",
          value: "2 顆 AAA 鹼性電池",
        },
        {
          label: "重量",
          value: "66g（含電池）",
        },
        {
          label: "尺寸",
          value: "44mm（寬）× 100mm（高）× 15mm（厚）",
        },
        {
          label: "預熱時間",
          value: "3 秒～4 分鐘",
        },
        {
          label: "測量分析時間",
          value: "10 秒內（0.10%BAC）",
        },
        {
          label: "準確度",
          value: "±10%（0.05%BAC 標準濕式酒精）",
        },
        {
          label: "電池壽命",
          value: "連續測量超過 200 次（低電量提醒）",
        },
        {
          label: "吹嘴",
          value: "MP1000 或內建吹嘴",
        },
        {
          label: "自動關機",
          value: "測量完成後自動關閉",
        },
        {
          label: "校正",
          value: "1000 次使用或 6 個月",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL8000/AL8000_maincopy.png",
          alt: "AL8000 主圖",
        },
        {
          src: "/images/product/AL8000/AL8000_subcopy.png",
          alt: "AL8000 副圖",
        },
      ],
    },
    {
      id: "al8000-plus",
      slug: "al8000-plus",
      name: "AL8000 Plus",
      categoryId: "screening",
      image: {
        src: "/images/product/AL8000-Plus/86b61f55e19d39281547ef2ddad093aa.png",
        alt: "AL8000 Plus",
      },
      summary: "高精準度燃料電池式酒精測試儀，具耐用性與結果記錄功能。",
      description: [
        "採用燃料電池感測器技術。",
        "高準確度且耐用。",
        "小型機身，單鍵操作。",
        "白色 FND 顯示器。",
        "可儲存 10 筆測試結果。",
        "具校正提醒功能。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "0.00 ~ 4.00‰（白色 FND 顯示器與蜂鳴聲）",
        },
        {
          label: "感測器類型",
          value: "電化學式大型感測器（燃料電池感測器）",
        },
        {
          label: "電源",
          value: "2 顆 AAA 鹼性電池",
        },
        {
          label: "重量",
          value: "66g（含電池）",
        },
        {
          label: "尺寸",
          value: "44mm（寬）× 100mm（高）× 15mm（厚）",
        },
        {
          label: "預熱時間",
          value: "3 秒～4 分鐘",
        },
        {
          label: "測量分析時間",
          value: "10 秒內（1.00‰）",
        },
        {
          label: "準確度",
          value: "±10%（0.50‰ 標準濕式酒精）",
        },
        {
          label: "電池壽命",
          value: "連續測量超過 200 次（低電量提醒）",
        },
        {
          label: "吹嘴",
          value: "MP1000 或內建吹嘴",
        },
        {
          label: "自動關機",
          value: "測量完成後自動關閉",
        },
        {
          label: "校正",
          value: "1000 次使用或 1 年",
        },
      ],
    },
    
    {
      id: "al6000",
      slug: "al6000",
      name: "AL6000",
      categoryId: "screening",
      image: {
        src: "/images/product/AL6000/AL6000_maincopy.png",
        alt: "AL6000",
      },
      summary: "可攜式呼氣酒精測試儀，提供正常模式與快速模式。",
      description: [
        "可靠且準確的可攜式酒精測試儀。",
        "提供正常模式與快速模式。",
        "正常模式顯示數值結果。",
        "快速模式顯示 Zero／Low／High。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.000 ~ 4.000‰／0.000 ~ 0.400%BAC／0.000 ~ 2.000 mg/L BrAC（LCD 顯示）",
        },
        {
          label: "感測器類型",
          value: "半導體型酒精感測器",
        },
        {
          label: "電源",
          value: "2 × AA 1.5V 鹼性電池（自動關機）",
        },
        {
          label: "重量",
          value: "115g（含電池）",
        },
        {
          label: "尺寸",
          value: "56mm（寬）× 124mm（高）× 41mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.01%BAC（0.05%BAC）",
        },
        {
          label: "吹嘴",
          value: "MP6000",
        },
        {
          label: "聲音警示",
          value: "三段式蜂鳴警示（LED 顯示）",
        },
        {
          label: "顏色",
          value: "綠色／黑色",
        },
        {
          label: "認證",
          value: "CE、FDA 510K Listed、DOT、Australian Standard",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL6000/AL6000_maincopy.png",
          alt: "AL6000 主圖",
        },
        {
          src: "/images/product/AL6000/AL6000_subcopy.png",
          alt: "AL6000 副圖",
        },
      ],
    },
    {
      id: "al7000",
      slug: "al7000",
      name: "AL7000",
      categoryId: "screening",
      image: {
        src: "/images/product/AL7000/AL7000_maincopy.png",
        alt: "AL7000",
      },
      summary: "手持式可攜酒精測試儀，提供可靠的呼氣酒精濃度檢測。",
      description: [
        "手持式可攜設計。",
        "提供可靠且準確的呼氣酒精濃度測量。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.000 ~ 4.000‰／0.000 ~ 0.400%BAC／0.000 ~ 2.000 mg/L BrAC（LED 顯示）",
        },
        {
          label: "感測器類型",
          value: "半導體型酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 1.5V 電池",
        },
        {
          label: "重量",
          value: "103g（含電池）",
        },
        {
          label: "尺寸",
          value: "116mm（高）× 50mm（寬）× 21mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.01%BAC（0.05%BAC）",
        },
        {
          label: "吹嘴",
          value: "MP1000",
        },
        {
          label: "聲音警示",
          value: "LED 搭配三段式蜂鳴警示",
        },
        {
          label: "顏色",
          value: "銀色",
        },
        {
          label: "認證",
          value: "CE、DOT",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL7000/AL7000_maincopy.png",
          alt: "AL7000 主圖",
        },
        {
          src: "/images/product/AL7000/AL7000_subcopy.png",
          alt: "AL7000 副圖",
        },
      ],
    },
    {
      id: "al8800",
      slug: "al8800",
      name: "AL8800",
      categoryId: "screening",
      image: {
        src: "/images/product/AL8800/AL8800_maincopy.png",
        alt: "AL8800",
      },
      summary: "採用燃料電池感測器與人體工學設計的高精準酒精測試儀。",
      description: [
        "燃料電池感測器技術。",
        "提供高準確度。",
        "人體工學設計。",
        "操作輕鬆方便。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "0.00 ~ 0.40 %BAC（分段顯示器與蜂鳴聲）",
        },
        {
          label: "感測器類型",
          value: "電化學式感測器（燃料電池感測器）",
        },
        {
          label: "電源",
          value: "2 顆 AAA 鹼性電池",
        },
        {
          label: "重量",
          value: "83g（含電池）",
        },
        {
          label: "尺寸",
          value: "53.8mm（寬）× 97.5mm（高）× 18mm（厚）",
        },
        {
          label: "預熱時間",
          value: "3 秒～4 分鐘",
        },
        {
          label: "測量分析時間",
          value: "10 秒內（0.10%BAC）",
        },
        {
          label: "準確度",
          value: "±10%（0.05%BAC 標準濕式酒精）",
        },
        {
          label: "電池壽命",
          value: "連續測量超過 500 次（低電量提醒）",
        },
        {
          label: "吹嘴",
          value: "MP1000",
        },
        {
          label: "自動關機",
          value: "測量完成後自動關閉",
        },
        {
          label: "校正",
          value: "1000 次使用或 6 個月",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL8800/AL8800_maincopy.png",
          alt: "AL8800 主圖",
        },
        {
          src: "/images/product/AL8800/AL8800_subcopy.png",
          alt: "AL8800 副圖",
        },
      ],
    },
    {
      id: "al3100",
      slug: "al3100",
      name: "AL3100",
      categoryId: "screening",
      image: {
        src: "/images/product/AL3100/AL3100_maincopy.png",
        alt: "AL3100",
      },
      summary: "快速量測呼氣酒精並自動換算 BAC 的酒精測試儀。",
      description: [
        "量測人體呼氣中的酒精含量。",
        "快速換算為 BAC（血液酒精濃度）。",
        "可立即判讀測試結果。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "0.00 ~ 4.00‰／0.00 ~ 0.40%BAC／0.00 ~ 2.00 mg/L BrAC（LED 顯示）",
        },
        {
          label: "感測器類型",
          value: "半導體型酒精感測器",
        },
        {
          label: "電源",
          value: "AC 110~220V（自動關機）",
        },
        {
          label: "重量",
          value: "4.5 公斤",
        },
        {
          label: "尺寸",
          value: "119mm（高）× 89mm（寬）× 130mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.01 %BAC（0.05 %BAC）",
        },
        {
          label: "吹嘴",
          value: "圓柱形吸管",
        },
        {
          label: "聲音警示",
          value: "LED 三段式蜂鳴警示",
        },
        {
          label: "顏色",
          value: "棕色",
        },
        {
          label: "認證",
          value: "CE",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL3100/AL3100_maincopy.png",
          alt: "AL3100 主圖",
        },
        {
          src: "/images/product/AL3100/AL3100_subcopy.png",
          alt: "AL3100 副圖",
        },
      ],
    },
    {
      id: "al5500",
      slug: "al5500",
      name: "AL5500",
      categoryId: "screening",
      image: {
        src: "/images/product/AL5500/AL5500_maincopy.png",
        alt: "AL5500",
      },
      summary: "操作簡單、方便攜帶的呼氣酒精測試儀。",
      description: [
        "操作簡單。",
        "方便攜帶。",
        "2 位數 LCD 顯示。",
        "按鍵操作。",
        "可重複使用吹嘴。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.00 ~ 4.00‰／0.00 ~ 0.40%BAC／0.00 ~ 2.00 mg/L BrAC（數位分段顯示）",
        },
        {
          label: "感測器類型",
          value: "半導體型酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 AA 1.5V 鹼性電池（自動關機）",
        },
        {
          label: "重量",
          value: "89g（含電池）",
        },
        {
          label: "尺寸",
          value: "110mm（高）× 46mm（寬）× 20mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.01%BAC（0.05%BAC）",
        },
        {
          label: "吹嘴",
          value: "各式吹嘴",
        },
        {
          label: "顏色",
          value: "黑色",
        },
        {
          label: "認證",
          value: "CE",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL5500/AL5500_maincopy.png",
          alt: "AL5500 主圖",
        },
        {
          src: "/images/product/AL5500/AL5500_subcopy.png",
          alt: "AL5500 副圖",
        },
      ],
    },
    {
      id: "al2500",
      slug: "al2500",
      name: "AL2500",
      categoryId: "screening",
      image: {
        src: "/images/product/AL2500/AL2500_maincopy.png",
        alt: "AL2500",
      },
      summary:
        "ALCOSCAN AL2500 是一款高靈敏度且具可靠準確度的酒精檢測器。",
      description: [
        "ALCOSCAN AL2500 是一款高靈敏度且具可靠準確度的酒精檢測器。",
        "特別適用於血液酒精濃度（B.A.C.）自我檢測。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "0.00 ~ 4.00‰／0.00 ~ 0.40%BAC／0.00 ~ 2.00 mg/L BrAC（LED 顯示）",
        },
        {
          label: "感測器類型",
          value: "半導體型酒精感測器",
        },
        {
          label: "電源",
          value: "2 顆 1.5V 電池",
        },
        {
          label: "重量",
          value: "85g（含電池）",
        },
        {
          label: "尺寸",
          value: "104mm（高）× 40mm（寬）× 20mm（厚）",
        },
        {
          label: "準確度",
          value: "±0.01%BAC（0.05%BAC）",
        },
        {
          label: "吹嘴",
          value: "無需使用吹嘴",
        },
        {
          label: "聲音警示",
          value: "三段式蜂鳴警示（搭配 LED 顯示）",
        },
        {
          label: "認證",
          value: "CE、FDA 510K",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL2500/AL2500_maincopy.png",
          alt: "AL2500 主圖",
        },
        {
          src: "/images/product/AL2500/AL2500_subcopy.png",
          alt: "AL2500 副圖",
        },
      ],
    },
    {
      id: "al3200",
      slug: "al3200",
      name: "AL3200",
      categoryId: "screening",
      image: {
        src: "/images/product/AL3200/AL3200_maincopy.png",
        alt: "AL3200",
      },
      summary: "提供快速模式與一般模式的專業酒精測試儀。",
      description: [
        "具快速模式與一般模式。",
        "超過門檻值時自動切換一般模式。",
        "可列印測試結果。",
        "方便管理酒精濃度。",
        "常用於日本運輸公司。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value:
            "快速模式：Zero／Fail（可列印）｜一般模式：0.000~0.400%BAC（可列印）",
        },
        {
          label: "感測器類型",
          value: "快速模式：半導體酒精感測器；一般模式：燃料電池感測器",
        },
        {
          label: "重量",
          value: "6.5 公斤",
        },
        {
          label: "尺寸",
          value: "320mm（寬）× 130mm（厚）× 310mm（高）",
        },
        {
          label: "準確度",
          value:
            "快速模式：±0.01%BAC（0.05%BAC）｜一般模式：±0.005%BAC（0.100%BAC）",
        },
        {
          label: "吹嘴",
          value: "快速模式：無需吹嘴；一般模式：吸管",
        },
        {
          label: "校正",
          value:
            "快速模式：可更換 AL32M 模組；一般模式：可更換 AL32FM 模組",
        },
        {
          label: "顯示方式",
          value: "分段顯示器",
        },
      ],
      gallery: [
        {
          src: "/images/product/AL3200/AL3200_maincopy.png",
          alt: "AL3200 主圖",
        },
        {
          src: "/images/product/AL3200/AL3200_subcopy.png",
          alt: "AL3200 副圖",
        },
      ],
    },
    {
      id: "ebs",
      slug: "ebs",
      name: "EBS",
      categoryId: "system",
      image: {
        src: "/images/product/EBS/EBS_maincopy.png",
        alt: "EBS",
      },
      summary: "入口式酒精測試系統，依酒測結果控制門禁。",
      description: [
        "入口式酒精測試系統。",
        "依分析結果控制門禁。",
        "Fail / Pass 判定。",
        "支援門禁開關控制。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "PASS（綠燈）／FAIL（紅燈）",
        },
        {
          label: "感測器類型",
          value: "燃料電池型酒精感測器",
        },
        {
          label: "電源",
          value: "DC 12V / 1A",
        },
        {
          label: "使用環境",
          value: "0°C ~ 50°C（儲存：5°C ~ 40°C）",
        },
        {
          label: "重量",
          value: "88g",
        },
        {
          label: "尺寸",
          value: "200 × 100 × 70 mm",
        },
        {
          label: "準確度",
          value: "±0.005%BAC（0.100%BAC）",
        },
        {
          label: "吹嘴",
          value: "無需使用吹嘴",
        },
      ],
      gallery: [
        {
          src: "/images/product/EBS/EBS_maincopy.png",
          alt: "EBS 主圖",
        },
        {
          src: "/images/product/EBS/EBS_subcopy.png",
          alt: "EBS 副圖",
        },
      ],
    },
    {
      id: "adbs",
      slug: "adbs",
      name: "ADBs",
      categoryId: "system",
      image: {
        src: "/images/product/ADBs/ADBs.png",
        alt: "ADBs",
      },
      summary: "全球首款 IoT 呼氣酒精測試系統。",
      description: [
        "全球首款 IoT（物聯網）呼氣酒精測試系統。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "0.000 ~ 5.000‰",
        },
        {
          label: "感測器類型",
          value: "燃料電池型酒精感測器",
        },
        {
          label: "電源",
          value: "AC 110~220V；DC 5V / 3A",
        },
        {
          label: "重量",
          value: "4.6 公斤",
        },
        {
          label: "尺寸",
          value: "375 × 250 × 93 mm",
        },
        {
          label: "準確度",
          value: "±5%（1.000‰）",
        },
        {
          label: "暖機時間",
          value: "5 秒～5 分鐘",
        },
        {
          label: "反應時間",
          value: "10 秒（1.000‰）",
        },
        {
          label: "操作溫度",
          value: "0°C ~ 40°C",
        },
        {
          label: "儲存溫度",
          value: "0°C ~ 50°C",
        },
        {
          label: "吹嘴",
          value: "圓柱形吸管",
        },
        {
          label: "吸管入口",
          value: "可使用",
        },
        {
          label: "投幣機構",
          value: "無",
        },
        {
          label: "吸管容量",
          value: "約 100 支",
        },
      ],
    },
    {
      id: "ebs-010",
      slug: "ebs-010",
      name: "EBS-010",
      categoryId: "system",
      image: {
        src: "/images/product/EBS010/EBS-010_maincopy.png",
        alt: "EBS-010",
      },
      summary: "入口式酒精測試系統，可與門禁整合。",
      description: [
        "入口式酒精測試系統。",
        "依分析結果控制門禁是否開啟。",
      ],
      specifications: [
        {
          label: "酒精濃度顯示",
          value: "PASS（綠燈）／FAIL（紅燈）",
        },
        {
          label: "感測器類型",
          value: "可更換式燃料電池酒精感測器",
        },
        {
          label: "電源",
          value: "DC 12V / 1.5A",
        },
        {
          label: "重量",
          value: "674g",
        },
        {
          label: "尺寸",
          value: "108 × 206 × 37 mm",
        },
        {
          label: "準確度",
          value: "±10%（0.500 g/L）",
        },
        {
          label: "吹嘴",
          value: "無需使用吹嘴",
        },
        {
          label: "操作溫度",
          value: "5°C ~ 40°C",
        },
        {
          label: "儲存溫度",
          value: "0°C ~ 50°C",
        },
      ],
      gallery: [
        {
          src: "/images/product/EBS010/EBS-010_maincopy.png",
          alt: "EBS-010 主圖",
        },
        {
          src: "/images/product/EBS010/EBS-010_subcopy.png",
          alt: "EBS-010 副圖",
        },
      ],
    },
  ],
};
