export class Job {
  id: number;
  image: string;
  company: string;
  end: Date;
  start: Date;
  title: String;
  summary: String;

  constructor(pId: number, pImage: string, pCompany: string, pStart: Date, pEnd: Date, pTitle: string, pSummary: string) {
    this.id = pId;
    this.image = pImage;
    this.company = pCompany;
    this.start = pStart;
    this.end = pEnd;
    this.title = pTitle;
    this.summary = pSummary;
  }
}
