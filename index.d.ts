type MeResponse = {
  data: {
    description: string;
    image: string;
    social: SocialMedia[]
  }
}
type SocialMedia = {
  url: string;
  name: string;
  icon: string;
}
