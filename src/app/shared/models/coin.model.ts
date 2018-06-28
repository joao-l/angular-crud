export class Coin {
  _id: string;
  itemType: string;
  subType: string;
  name: string;
  currency: string;
  faceWord: string;
  faceFigure: string;
  isDemonetized: boolean;
  demonetizationDate: string;
  alignment: string;
  comment: string;
  commemoratedEvent: string;
  side: Side[];
  issuer: Issuer;
  features: Features;
  emissionInfo: EmissionInfo[];
  publication: Publication;
  removed: Removed;
  relatedItems: RelatedItems[];
  servicesProfile: ServicesProfile[];

  constructor(
    itemType: string = '',
    subType: string = '',
    name: string = '',
    currency: string = '',
    faceWord: string = '',
    faceFigure: string = '',
    isDemonetized: boolean = false,
    demonetizationDate: string = '',
    alignment: string = '',
    comment: string = '',
    commemoratedEvent: string = '',
    side: Side[] = new Array<Side>(),
    issuer: Issuer = new Issuer(),
    features: Features = new Features(),
    emissionInfo: EmissionInfo[] = new Array<EmissionInfo>(),
    publication: Publication = new Publication(),
    removed: Removed = new Removed(),
    relatedItems: RelatedItems[] = [],
    servicesProfile: ServicesProfile[] = []
  ) {
    this.itemType = itemType;
    this.subType = subType;
    this.name = name;
    this.currency = currency;
    this.faceWord = faceWord;
    this.faceFigure = faceFigure;
    this.isDemonetized = isDemonetized;
    this.demonetizationDate = demonetizationDate;
    this.alignment = alignment;
    this.comment = comment;
    this.commemoratedEvent = commemoratedEvent;
    this.side = side;
    this.issuer = issuer;
    this.features = features;
    this.emissionInfo = emissionInfo;
    this.publication = publication;
    this.removed = removed;
    this.relatedItems = relatedItems;
    this.servicesProfile = servicesProfile;
  }
}

export class EmissionInfo {
  year: string;
  calendar: string;
  quantity: number;
  comment: string;
  grading: any[];
  image: any[];
  user: any[];

  constructor(
    year: string = '',
    calendar: string = '',
    quantity: number = null,
    comment: string = '',
    grading: any[] = [],
    image: any[] = [],
    user: any[] = []
  ) {
    this.year = year;
    this.calendar = calendar;
    this.quantity = quantity;
    this.comment = comment;
    this.grading = grading;
    this.image = image;
    this.user = user;
  }
}

export class Features {
  material: string;
  weight: number;
  diameter: number;
  thickness: number;
  shape: string;

  constructor(
    material: string = null,
    weight: number = null,
    diameter: number = null,
    thickness: number = null,
    shape: string = null
  ) {
    this.material = material;
    this.weight = weight;
    this.diameter = diameter;
    this.thickness = thickness;
    this.shape = shape;
  }
}

export class Issuer {
  countryName: string;
  issuerName: string;
  alpha2Code: string;
  isActive: boolean;

  constructor(
    countryName: string = '',
    issuerName: string = '',
    alpha2Code: string = ''
  ) {
    this.countryName = countryName;
    this.issuerName = issuerName;
    this.alpha2Code = alpha2Code;
  }
}

export class Publication {
  isPublished: boolean;
  userId: string;
  userName: string;
  date: string;

  constructor(
    isPublished: boolean = false,
    userId: string = '',
    userName: string = '',
    date: string = ''
  ) {
    this.isPublished = isPublished;
    this.userId = userId;
    this.userName = userName;
    this.date = date;
  }
}

export class RelatedItems {
  tempReference: string;

  constructor(tempReference: string = null) {
    this.tempReference = tempReference;
  }
}

export class ServicesProfile {
  name: string;
  itemId: string;
  updateTime: string;

  constructor(
    name: string = null,
    itemId: string = null,
    updateTime: string = null
  ) {
    this.name = name;
    this.itemId = itemId;
    this.updateTime = updateTime;
  }
}

export class Side {
  type: string;
  engraver: string;
  description: string;
  lettering: string;
  officialImage: any;
  letteringTranslation: string;

  constructor(
    type: string = '',
    engraver: string = '',
    description: string = '',
    lettering: string = '',
    officialImage: any = '',
    letteringTranslation: string = ''
  ) {
    this.type = type;
    this.engraver = engraver;
    this.description = description;
    this.lettering = lettering;
    this.officialImage = officialImage;
    this.letteringTranslation = letteringTranslation;
  }
}

export class Removed {
  isRemoved: boolean;
  reason: string;
  userId: string;
  userName: string;
  date: string;

  constructor(
    isRemoved: boolean = false,
    reason: string = null,
    userId: string = null,
    userName: string = null,
    date: string = null,
  ) {
    this.isRemoved = isRemoved;
    this.reason = reason;
    this.userId = userId;
    this.userName = userName;
    this.date = date;
  }
}
