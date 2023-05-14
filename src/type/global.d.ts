export interface DailyData {
  audiAcc: number;
  audiChange: string;
  audiCnt: number;
  audiInten: string;
  movieNm: string;
  openDt: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  rnum: string;
  salesAcc: string;
  salesAmt: string;
  salesCahnge: string;
  salesShare: string;
  scrnCnt: string;
  showCnt: string;
}

export interface Actor {
  peopleNm: string;
  peopleNmEn: string;
  cast: string;
  castEn: string;
}

export interface Director {
  peopleNm: string;
  peopleNmEn: string;
}

export interface Genre {
  genreNm: string;
}

export interface MoiveData {
  actors: object[];
  audits: object[];
  companys: object[];
  directors: object[];
  genres: object[];
  movieCd: string;
  movieNm: string;
  movieNmEn: string;
  movieNmOg: string;
  nations: object[];
  openDt: string;
  prdtStatNm: string;
  prdtYear: string;
  showTm: string;
  showTypes: object[];
  staffs: object[];
  typeNm: string;
}
