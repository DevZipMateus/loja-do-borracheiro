import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Alicate para Balanceamento - Corneta",
    image: "/lovable-uploads/galeria/ALICATE PARA BALANCEAMENTO - CORNETA.png"
  },
  {
    id: 2,
    name: "Anel Centralizador 71,9 Amarelo - Fiat",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 AMARELO - FIAT - R.png"
  },
  {
    id: 3,
    name: "Anel Centralizador 71,9 Azul Escuro - GM",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 AZUL ESCURO - GM - R.png"
  },
  {
    id: 4,
    name: "Anel Centralizador 71,9 Laranja - Volkswagen",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 LARANJA - VOLKSWAGEM.png"
  },
  {
    id: 5,
    name: "Anel Centralizador 71,9 Marrom - Renault",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR 71,9 MARROM - RENAULT.png"
  },
  {
    id: 6,
    name: "Anel Centralizador Branco Peugeot",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR BRANCO PEUGEOT.png"
  },
  {
    id: 7,
    name: "Anel Centralizador Ford Verde",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR FORD VERDE.png"
  },
  {
    id: 8,
    name: "Anel Centralizador Preto Toyota",
    image: "/lovable-uploads/galeria/ANEL CENTRALIZADOR PRETO TOYOTA.png"
  },
  {
    id: 9,
    name: "Assentador de Talão para Montagem de Pneu - Canhão",
    image: "/lovable-uploads/galeria/ASSENTADOR DE TALÃO PARA MONTAGEM DE PNEU - CANHÃO.png"
  },
  {
    id: 10,
    name: "Agulha de Reposição para Moto 3mm",
    image: "/lovable-uploads/galeria/Agulha de reposição para moto 3mm.png"
  },
  {
    id: 11,
    name: "Agulha 72mm com Cabo",
    image: "/lovable-uploads/galeria/Agulha_72mm_com_cabo.png"
  },
  {
    id: 12,
    name: "Agulha de Reposição Caminhão 4mm",
    image: "/lovable-uploads/galeria/Agulha_de_reposicao_ caminhão 4mm.png"
  },
  {
    id: 13,
    name: "Agulha de Reposição Carro 4mm",
    image: "/lovable-uploads/galeria/Agulha_de_reposicao_ carro 4mm. png"
  },
  {
    id: 14,
    name: "Base para Válvula Universal",
    image: "/lovable-uploads/galeria/BASE PARA VALVULA UNIVERSAL.png"
  },
  {
    id: 15,
    name: "Bico de Encher Pneu Duplo - Schweers com Retenção",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO - SCHWEERS COM RETENÇÃO.png"
  },
  {
    id: 16,
    name: "Bico de Encher Pneu Duplo 45º com Retenção - Schweers",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO 45º C RETENCAO - SCHWEE.png"
  },
  {
    id: 17,
    name: "Bico de Encher Pneu Duplo Curto em Y",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO CURTO EM Y - 330.png"
  },
  {
    id: 18,
    name: "Bico de Encher Pneu Duplo Longo Reto Angular (em Y)",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU DUPLO LONGO RETO ANGULAR ( EM Y ).png"
  },
  {
    id: 19,
    name: "Bico de Encher Pneu Macho - Válvula Simples - Tipo Bola",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU MACHO - VALVULA SIMPLES - TIPO BOLA.png"
  },
  {
    id: 20,
    name: "Bico de Encher Pneu Prendedor Haste Metal - Steula",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU PRENDEDOR HASTE METAL - STEULA.png"
  },
  {
    id: 21,
    name: "Bico de Encher Pneu Reto Longo - Schweers",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU RETO LONGO - SCHWEERS.png"
  },
  {
    id: 22,
    name: "Bico de Encher Pneu Tipo Engate com Retenção - Schweers Apito",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU TIPO ENGATE C RETENCAO - SCHW APITO.png"
  },
  {
    id: 23,
    name: "Bico de Encher Pneu Tipo Francês - Steula",
    image: "/lovable-uploads/galeria/BICO DE ENCHER PNEU TIPO FRANCES - STEULA.png"
  },
  {
    id: 24,
    name: "Bico de Sopro para Limpeza em Plástico com Bico e Válvula Metálica",
    image: "/lovable-uploads/galeria/BICO DE SOPRO P LIMPEZA EM PLÁSTICO C BICO E VALVULA METÁLICO.png"
  },
  {
    id: 25,
    name: "Bico Duplo para Encher Pneu Longo - Schweers 90°",
    image: "/lovable-uploads/galeria/BICO DUPLO PARA ENCHER PNEU LONGO - SCHWEERS 90°.png"
  },
  {
    id: 26,
    name: "Bico Pneumático 1850 Bremen em Alumínio 1/4",
    image: "/lovable-uploads/galeria/BICO PNEUMATICO 1850 BREMEN EM ALUMINIO 1 4.png"
  },
  {
    id: 27,
    name: "Borracha Vulcanite 1.5mm - 1kg",
    image: "/lovable-uploads/galeria/BORRACHA VULCANITE 1.5MM - 1KG VULCANITE.png"
  },
  {
    id: 28,
    name: "Borracha Vulk Rolo de 1kg - Vipal",
    image: "/lovable-uploads/galeria/BORRACHA VULK ROLO DE 1 KG - VIPAL.png"
  },
  {
    id: 29,
    name: "Borrachinha para Bico Duplo Modelo",
    image: "/lovable-uploads/galeria/BORRACHINHA PARA BICO DUPLO MODELO FVA.png"
  },
  {
    id: 30,
    name: "Botão TK - Mafrisa",
    image: "/lovable-uploads/galeria/BOTAO TK - MAFRISA.png"
  },
  {
    id: 31,
    name: "Broca com Cabo de Metal Trançada 5x102mm Fina",
    image: "/lovable-uploads/galeria/BROCA COM CABO DE METAL TRANÇADA 5X102MM FINA.png"
  },
  {
    id: 32,
    name: "Cabo Alavanca da Chave de Roda 1200mm - Kraucher",
    image: "/lovable-uploads/galeria/CABO ALAVANCA DA CHAVE DE RODA 1200 MM - KRAUCHER.png"
  },
  {
    id: 33,
    name: "Calço D20 Fino - 1.00mm - Pacote com 50 un",
    image: "/lovable-uploads/galeria/CALCO D20 FINO - 1.00 MM - PACOTE COM 50 UN.png"
  },
  {
    id: 34,
    name: "Calço D40 Fino - 1.50mm - Pacote com 25 un",
    image: "/lovable-uploads/galeria/CALCO D40 FINO - 1.50 MM - PACOTE COM 25 UN.png"
  },
  {
    id: 35,
    name: "Calibrador 150 lbs - Has. Metal",
    image: "/lovable-uploads/galeria/CALIBRADOR 150 LBS - HAS. METAL - 7188C.png"
  },
  {
    id: 36,
    name: "Calibrador 50 lbs",
    image: "/lovable-uploads/galeria/CALIBRADOR 50 LBS - 7750.png"
  },
  {
    id: 37,
    name: "Calibrador de Água para Trator 45L - BS",
    image: "/lovable-uploads/galeria/CALIBRADOR DE AGUA PARA TRATOR 45L - BS - 9350.png"
  },
  {
    id: 38,
    name: "Calibrador de Ar com Manômetro Bremen 0 a 170PSI",
    image: "/lovable-uploads/galeria/CALIBRADOR DE AR COM MANÔMETRO BREMEN 0 A 170PSI.png"
  },
  {
    id: 39,
    name: "Calibrador Eletrônico de Parede Premium",
    image: "/lovable-uploads/galeria/CALIBRADOR ELETRÔNICO DE PAREDE PREMIUM.png"
  },
  {
    id: 40,
    name: "Calço D20 Médio 1.50 - Pacote com 50 un",
    image: "/lovable-uploads/galeria/CALÇO D20 MÉDIO 1.50 PCT 50 UN.png"
  },
  {
    id: 41,
    name: "Calço D40 Extra Fino - 0.75mm - Com 25 uni",
    image: "/lovable-uploads/galeria/CALÇO D40 EXTRA FINO - 0,75MM - COM 25UNI.png"
  },
  {
    id: 42,
    name: "Calço D40 Médio - 3.00mm - Pacote com 25 un",
    image: "/lovable-uploads/galeria/CALÇO D40 MÉDIO - 3.00MM - PACOTE COM 25 UN.png"
  },
  {
    id: 43,
    name: "Calço Opala Grosso - 3.00mm - Pacote com 50 un",
    image: "/lovable-uploads/galeria/CALÇO OPALA GROSSO - 3.00 MM - PACOTE COM 50 UN.png"
  },
  {
    id: 44,
    name: "Calço Opala Médio - 1.50mm - Pacote com 50 un",
    image: "/lovable-uploads/galeria/CALÇO OPALA MÉDIO - 1.50 MM - PACOTE COM 50 UN.png"
  },
  {
    id: 45,
    name: "Câmara Canello Diant. CMC 19 Cross Reforçada",
    image: "/lovable-uploads/galeria/CAMARA CANELLO DIANT. CMC 19 CROSS REFORÇADA.png"
  },
  {
    id: 46,
    name: "Câmara Cargo 14 de Biz",
    image: "/lovable-uploads/galeria/CAMARA CARGO 14 DE BIZ.png"
  },
  {
    id: 47,
    name: "Câmara de Ar 700 x 12 - Flexen",
    image: "/lovable-uploads/galeria/CAMARA DE AR 700 X 12- FLEXEN.png"
  },
  {
    id: 48,
    name: "Câmara de Ar Canello 2.50 x 17 - TR 4 CMH 17",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 2.50 X 17 - TR 4 CMH 17.png"
  },
  {
    id: 49,
    name: "Câmara de Ar Canello 20 Bici - CE 20 - TR 1",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 20 BICI  - CE 20 - TR 1.png"
  },
  {
    id: 50,
    name: "Câmara de Ar Canello 250 x 16 - CMH 16 - TR 4",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 250 X 16 - CMH 16 - TR 4.png"
  },
  {
    id: 51,
    name: "Câmara de Ar Canello 3.25 x 8 - CIA 8 - TR 1",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 3.25 X 8 - CIA 8 - TR 1.png"
  },
  {
    id: 52,
    name: "Câmara de Ar Canello 3.50 - 8",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 3.50 - 8.png"
  },
  {
    id: 53,
    name: "Câmara de Ar Canello 300 x 14 - CMA 14 - TR 4",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 300 X 14 - CMA 14 - TR 4.png"
  },
  {
    id: 54,
    name: "Câmara de Ar Canello 300 x 21 - CMA 21 - TR 4",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 300 X 21 - CMA 21 - TR 4.png"
  },
  {
    id: 55,
    name: "Câmara de Ar Canello 300 x 21- CMA 21 R - Trilha - TR 4",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 300 X 21- CMA 21 R - TRILHA - TR 4.png"
  },
  {
    id: 56,
    name: "Câmara de Ar Canello 400 x 18 - CMB 18 R - Trilha - TR 4",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 400 X 18 - CMB 18 R - TRILHA - TR 4.png"
  },
  {
    id: 57,
    name: "Câmara de Ar Canello 90.90 x 18 CMA 18",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 90.90 X 18 CMA 18.png"
  },
  {
    id: 58,
    name: "Câmara de Ar Canello 90.90 x 19 CMA 19",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO 90.90 X 19 CMA 19.png"
  },
  {
    id: 59,
    name: "Câmara de Ar Canello Bicicleta 26 CE 26",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO BICICLETA 26 CE 26.png"
  },
  {
    id: 60,
    name: "Câmara de Ar Canello Bicicleta Aro 16 - CE 16 - TR 1",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO BICICLETA ARO 16 - CE 16 - TR 1.png"
  },
  {
    id: 61,
    name: "Câmara de Ar Canello Bicicleta Aro 24 - CE 24 - TR 1",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO BICICLETA ARO 24 - CE 24 - TR 1.png"
  },
  {
    id: 62,
    name: "Câmara de Ar Canello Bicicleta Aro 29 - CE 29",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO BICICLETA ARO 29 - CE 29.png"
  },
  {
    id: 63,
    name: "Câmara de Ar Canello CMB 18 Larga",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO CMB 18 LARGA.png"
  },
  {
    id: 64,
    name: "Câmara de Ar Canello CMC 460 x 17 Larga",
    image: "/lovable-uploads/galeria/CAMARA DE AR CANELLO CMC 460 X 17 LARGA.png"
  },
  {
    id: 65,
    name: "Câmara de Ar Cargo 18",
    image: "/lovable-uploads/galeria/CAMARA DE AR CARGO 18.png"
  },
  {
    id: 66,
    name: "Câmara de Ar Cargo 2.50 - 17",
    image: "/lovable-uploads/galeria/CAMARA DE AR CARGO 2.50 - 17.png"
  },
  {
    id: 67,
    name: "Câmara de Ar Cargo 2.50 x 4",
    image: "/lovable-uploads/galeria/CAMARA DE AR CARGO 2.50 X 4 -.png"
  },
  {
    id: 68,
    name: "Câmara de Ar Cargo 3.25-8",
    image: "/lovable-uploads/galeria/CAMARA DE AR CARGO 3.25-8.png"
  },
  {
    id: 69,
    name: "Câmara de Ar Cargo 3.50 - 4",
    image: "/lovable-uploads/galeria/CAMARA DE AR CARGO 3.50 - 4.png"
  },
  {
    id: 70,
    name: "Câmara de Ar Cargo 3.50 - 8",
    image: "/lovable-uploads/galeria/CAMARA DE AR CARGO 3.50 - 8.png"
  },
  {
    id: 71,
    name: "Câmara de Ar Cargo 4.80 4 e 4.00 x 8",
    image: "/lovable-uploads/galeria/CAMARA DE AR CARGO 4.804 E 4.00X8.png"
  },
  {
    id: 72,
    name: "Câmara de Ar Flexen 11.4 - 24 12.4 - 24",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 11. 4 - 24  12. 4 - 24.png"
  },
  {
    id: 73,
    name: "Câmara de Ar Flexen 1100 x 22",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 1100X22.png"
  },
  {
    id: 74,
    name: "Câmara de Ar Flexen 13 x 14 TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 13x14 TR 13.png"
  },
  {
    id: 75,
    name: "Câmara de Ar Flexen 28.9 x 15.8 25 x 15 - TR 75 - 508200FX",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 28.9 X 15.825 X 15 - TR 75 - 508200FX.png"
  },
  {
    id: 76,
    name: "Câmara de Ar Flexen 6.00 - 9 JS2",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 6.00 - 9 JS2.png"
  },
  {
    id: 77,
    name: "Câmara de Ar Flexen 6.50-10",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 6.50-10.png"
  },
  {
    id: 78,
    name: "Câmara de Ar Flexen 650 x 16 - KR 16 - TR 15",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 650 X 16 - KR 16 - TR 15.png"
  },
  {
    id: 79,
    name: "Câmara de Ar Flexen 7.50 - 16 TR 15",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 7.50 - 16 TR 15.png"
  },
  {
    id: 80,
    name: "Câmara de Ar Flexen 7.50 - 16 TR 75A",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 7.50 - 16 TR 75A.png"
  },
  {
    id: 81,
    name: "Câmara de Ar Flexen 900 x 16 Agrícola",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 900x16 AGRICOLA.png"
  },
  {
    id: 82,
    name: "Câmara de Ar Flexen 900 x 20",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN 900x20.png"
  },
  {
    id: 83,
    name: "Câmara de Ar Flexen FR 15 TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN FR 15 TR 13.png"
  },
  {
    id: 84,
    name: "Câmara de Ar Flexen IND 7.50 - 15",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN IND 7. 50 - 15.png"
  },
  {
    id: 85,
    name: "Câmara de Ar Flexen TR 15 - FR 15",
    image: "/lovable-uploads/galeria/CAMARA DE AR FLEXEN TR 15 - FR 15 -.png"
  },
  {
    id: 95,
    name: "Câmara de Ar Maggion 4.50 21",
    image: "/lovable-uploads/galeria/CAMARA DE AR MAGGION 4.50 21"
  },
  {
    id: 96,
    name: "Câmara de Ar Maggion 400 x 15 - TR 15",
    image: "/lovable-uploads/galeria/CAMARA DE AR MAGGION 400 X 15 - TR 15_.png"
  },
  {
    id: 97,
    name: "Câmara de Ar Maggion 500/6-12",
    image: "/lovable-uploads/galeria/CAMARA DE AR MAGGION 500_6-12.png"
  },
  {
    id: 98,
    name: "Câmara de Ar Pirelli IM PE - 26",
    image: "/lovable-uploads/galeria/CAMARA DE AR PIRELLI IM PE - 26.png"
  },
  {
    id: 99,
    name: "Câmara de Ar Pirelli PE-20 Válv Americana 32mm",
    image: "/lovable-uploads/galeria/CAMARA DE AR PIRELLI PE-20 VALV AMERICANA 32MM.png"
  },
  {
    id: 100,
    name: "Câmara de Ar Q Bom 1.200 x 24 - TC 131",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM 1.200 X 24 - TC 131.png"
  },
  {
    id: 101,
    name: "Câmara de Ar Q Bom 1000 x 20 - TC 131",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM 1000 X 20 - TC 131 (1).png"
  },
  {
    id: 102,
    name: "Câmara de Ar Q Bom 18 x 8.50-8 - TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM 18 X 8.50-8 - TR 13.png"
  },
  {
    id: 103,
    name: "Câmara de Ar Q Bom 6.50 - 10",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM 6. 50 - 10.png"
  },
  {
    id: 104,
    name: "Câmara de Ar Q Bom 7.50_16 SC 95",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM 7.50_16 SC 95_.png"
  },
  {
    id: 105,
    name: "Câmara de Ar Q Bom 7.50_16 TR 15",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM 7.50_16 TR 15.png"
  },
  {
    id: 106,
    name: "Câmara de Ar Q Bom 750 - 16 TR 460",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM 750 - 16 TR 460.png"
  },
  {
    id: 107,
    name: "Câmara de Ar Q Bom 900 x 20 - TC 131",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM 900 X 20 - TC 131 -.png"
  },
  {
    id: 108,
    name: "Câmara de Ar Q Bom LTQ 1214",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM LTQ 1214_.png"
  },
  {
    id: 109,
    name: "Câmara de Ar Q Bom LTQ 1215 - TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM LTQ 1215 - TR 13 -.png"
  },
  {
    id: 110,
    name: "Câmara de Ar Q Bom LTQ 1216 - TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM LTQ 1216 - TR 13.png"
  },
  {
    id: 111,
    name: "Câmara de Ar Q Bom LTQ 1415 - TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR Q BOM LTQ 1415 - TR 13.png"
  },
  {
    id: 112,
    name: "Câmara de Ar QBom 1.100 x 22 - TC 131",
    image: "/lovable-uploads/galeria/CAMARA DE AR QBOM 1.100 X 22 - TC 131 -.png"
  },
  {
    id: 113,
    name: "Câmara de Ar QBom 295_80-22,5 TR 462",
    image: "/lovable-uploads/galeria/CAMARA DE AR QBOM 295_80-22,5 TR 462.png"
  },
  {
    id: 114,
    name: "Câmara de Ar QBom 400_500 x 8 AQ - TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR QBOM 400_500 X 8 AQ - TR 13.png"
  },
  {
    id: 115,
    name: "Câmara de Ar QBom GR 13_14 TR13",
    image: "/lovable-uploads/galeria/CAMARA DE AR QBOM GR 13_14 TR13.png"
  },
  {
    id: 116,
    name: "Câmara de Ar Rotta FR 13 x 14",
    image: "/lovable-uploads/galeria/CAMARA DE AR ROTTA FR 13x14.png"
  },
  {
    id: 117,
    name: "Câmara de Ar Tortuga 1.000 x 16 - TR 15 - AG 1916",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 1.000 X 16 - TR 15 - AG 1916 (1).png"
  },
  {
    id: 118,
    name: "Câmara de Ar Tortuga 1.000 x 20 - TC 131",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 1.000 X 20 - TC 131 -.png"
  },
  {
    id: 119,
    name: "Câmara de Ar Tortuga 10.5_80 x 18 - TR 15 - AG 1718 - TORT",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 10.5_80 X 18 - TR 15 - AG 1718 - TORT.png"
  },
  {
    id: 120,
    name: "Câmara de Ar Tortuga 12.5_80 x 18 - TR 15 - AG 2018",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 12.5_80 X 18 - TR 15 - AG 2018.png"
  },
  {
    id: 121,
    name: "Câmara de Ar Tortuga 14,00x24 1400x25 FE 2525",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 14,00X24 1400X25 FE 2525.png"
  },
  {
    id: 122,
    name: "Câmara de Ar Tortuga 14.9 x 26_28 - TR 218 - AG 2428",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 14.9 X 26_28 - TR 218 - AG 2428.png"
  },
  {
    id: 123,
    name: "Câmara de Ar Tortuga 16, 9 x 28 TR 218 - AG 2730",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 16, 9 X 28 TR 218 - AG 2730.png"
  },
  {
    id: 124,
    name: "Câmara de Ar Tortuga 16.9 x 24 - TR 218 - AG 2824",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 16.9 X 24 - TR 218 - AG 2824 -.png"
  },
  {
    id: 125,
    name: "Câmara de Ar Tortuga 16.9_18.4 x 26 - TR 21 - AG 3026",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 16.9_18.4 X 26 - TR 21 - AG 3026 .png"
  },
  {
    id: 126,
    name: "Câmara de Ar Tortuga 17.5 x 25 - TR 220 - FE 2725",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 17.5 X 25 - TR 220 - FE 2725 -.png"
  },
  {
    id: 127,
    name: "Câmara de Ar Tortuga 18.4 x 30 - TR 218 - AG 3030",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 18.4 X 30 - TR 218 - AG 3030 -.png"
  },
  {
    id: 128,
    name: "Câmara de Ar Tortuga 18.4 x 34 - TR 218 - AG 3034",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 18.4 X 34 - TR 218 - AG 3034 -.png"
  },
  {
    id: 129,
    name: "Câmara de Ar Tortuga 400-15 TR 15",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 400-15 TR 15.png"
  },
  {
    id: 130,
    name: "Câmara de Ar Tortuga 500_6 x 12 - TR 15 AG 1012",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 500_6 X 12 - TR 15 AG 1012 -.png"
  },
  {
    id: 131,
    name: "Câmara de Ar Tortuga 700 x 18 - TR 218 - AG 1218",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 700 X 18 - TR 218 - AG 1218.png"
  },
  {
    id: 132,
    name: "Câmara de Ar Tortuga 750 x 16 - TR 15 - AG 1416",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 750 X 16 - TR 15 - AG 1416 -.png"
  },
  {
    id: 133,
    name: "Câmara de Ar Tortuga 750 x 16 - TR 460 CL 1416",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 750 X 16 - TR 460 CL 1416 -.png"
  },
  {
    id: 134,
    name: "Câmara de Ar Tortuga 750 x 18 - TR 218 - AG 1418",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 750 X 18 - TR 218 - AG 1418 -.png"
  },
  {
    id: 135,
    name: "Câmara de Ar Tortuga 8.3-8 x 24 - TR 218 - AG 1624",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 8.3-8 X 24 - TR 218 - AG 1624 -.png"
  },
  {
    id: 136,
    name: "Câmara de Ar Tortuga 900 x 16 - TR 15 - AG 1616",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA 900 X 16 - TR 15 - AG 1616 -.png"
  },
  {
    id: 137,
    name: "Câmara de Ar Tortuga KR 16 - TR 15 - 6.50-16 AG 1216",
    image: "/lovable-uploads/galeria/CAMARA DE AR TORTUGA KR 16 - TR 15 - 6 .50 -16   AG 1216 -.png"
  },
  {
    id: 138,
    name: "Câmara de Ar Vulcan Bor ( 90.90 - 19 ) VJ 19",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR ( 90.90 - 19 ) VJ 19.png"
  },
  {
    id: 139,
    name: "Câmara de Ar Vulcan Bor (90.100 - 14 110.80) - 14 VJ 14 L",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR (90.100 - 14  110.80) - 14 VJ 14 L.png"
  },
  {
    id: 140,
    name: "Câmara de Ar Vulcan Bor 1314 TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 1314 TR 13.png"
  },
  {
    id: 141,
    name: "Câmara de Ar Vulcan Bor 14 VJ - 14",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 14 VJ - 14.png"
  },
  {
    id: 142,
    name: "Câmara de Ar Vulcan Bor 16 ( 2.50 - 16 - 275x16 ) VG - 16",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 16 ( 2.50 - 16 - 275X16 ) VG - 16.png"
  },
  {
    id: 143,
    name: "Câmara de Ar Vulcan Bor 16 ( 300x16 - 80 x 100 - 16 ) VJ - 16",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 16 ( 300X16 - 80 X 100 - 16 ) VJ - 16.png"
  },
  {
    id: 144,
    name: "Câmara de Ar Vulcan Bor 17 ( 2.50 - 17 ) VG - 17",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 17 ( 2.50 - 17 ) VG - 17.png"
  },
  {
    id: 145,
    name: "Câmara de Ar Vulcan Bor 17 ( 4.10 - 17 ) VJ - 17",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 17 ( 4.10 - 17 ) VJ - 17.png"
  },
  {
    id: 146,
    name: "Câmara de Ar Vulcan Bor 3.50 - 10 VG - 10 TR - 87",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 3.50 - 10 VG - 10 TR - 87.png"
  },
  {
    id: 147,
    name: "Câmara de Ar Vulcan Bor 3.50 - 8 VJ 8",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 3.50 - 8 VJ 8.png"
  },
  {
    id: 148,
    name: "Câmara de Ar Vulcan Bor 90.90 - 18 ( 3.00 - 18 ) VG 18",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 90.90 - 18 ( 3.00 - 18 ) VG 18.png"
  },
  {
    id: 149,
    name: "Câmara de Ar Vulcan Bor 90.90 - 21 VG 21",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR 90.90 - 21 VG 21.png"
  },
  {
    id: 150,
    name: "Câmara de Ar Vulcan Bor Trator Agrícola Aro 16 - LTR 16 TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR TRATOR AGRICOLA ARO 16 - LTR 16 TR 13.png"
  },
  {
    id: 151,
    name: "Câmara de Ar Vulcan Bor VJ 18",
    image: "/lovable-uploads/galeria/CAMARA DE AR VULCAN BOR VJ 18.png"
  },
  {
    id: 152,
    name: "Câmara de Ar XBri (ID) 5 00-8 TR 244",
    image: "/lovable-uploads/galeria/CAMARA DE AR XBRI (ID) 5 00-8 TR 244.png"
  },
  {
    id: 153,
    name: "Câmara de Ar XBri (ID) 7 50 16 TR 15",
    image: "/lovable-uploads/galeria/CAMARA DE AR XBRI (ID) 7 50 16 TR 15.png"
  },
  {
    id: 154,
    name: "Câmara de Ar XBri (ID) KR 15 TR 13",
    image: "/lovable-uploads/galeria/CAMARA DE AR XBRI (ID) KR 15 TR 13.png"
  },
  {
    id: 155,
    name: "Câmara de Ar XBri 295.80 R 22,5",
    image: "/lovable-uploads/galeria/CAMARA DE AR XBRI 295.80 R 22,5.png"
  },
  {
    id: 156,
    name: "Câmara Q Bom GR15 TR15",
    image: "/lovable-uploads/galeria/CAMARA Q BOM GR15 TR15.png"
  },
  {
    id: 157,
    name: "Carbide 009 G36",
    image: "/lovable-uploads/galeria/CARBIDE 009 G36.png"
  },
  {
    id: 158,
    name: "Carbide ATC N 024 G 16",
    image: "/lovable-uploads/galeria/CARBIDE ATC N 024 G 16.png"
  },
  {
    id: 159,
    name: "Carbide ATC N 024 G 36",
    image: "/lovable-uploads/galeria/CARBIDE ATC N 024 G 36.png"
  },
  {
    id: 160,
    name: "Chave de Impacto Industrial P Autos 1.2 C. Kit de Soquetes - Torque 680NM Pneumática Bremen",
    image: "/lovable-uploads/galeria/CHAVE DE IMPACTO INDUSTRIAL P AUTOS 1.2_ C. KIT DE SOQUETES - TORQUE 680NM pneumatica BREMEN.png"
  },
  {
    id: 161,
    name: "XBri 1000.20",
    image: "/lovable-uploads/galeria/XBRI 1000.20.png"
  },
  {
    id: 162,
    name: "Abraçadeira",
    image: "/lovable-uploads/galeria/abraçadeira.jpg"
  }
];

const Catalogo = () => {
  const handleWhatsAppClick = (productName: string) => {
    const message = `Olá! Vim do catálogo da LOJA DO BORRACHEIRO RS e gostaria de consultar o preço do produto: ${productName}`;
    const whatsappUrl = `https://wa.me/5551995048546?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Catálogo de Produtos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira nossa linha completa de produtos para borracharia
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-soft transition-all duration-300 bg-card border-border/50">
                <CardContent className="p-0">
                  {/* Product image */}
                  <div className="relative aspect-square bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product info */}
                  <div className="p-4 space-y-3">
                    <h3 className="font-medium text-sm line-clamp-2 text-card-foreground group-hover:text-primary transition-colors min-h-[2.5rem]">
                      {product.name}
                    </h3>
                    
                    <Button 
                      onClick={() => handleWhatsAppClick(product.name)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="sm"
                    >
                      Consultar Preço
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
