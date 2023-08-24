import ContentLoader from "react-content-loader"

const HourSkeleton = () => (
  <ContentLoader 
    speed={2}
    backgroundColor="rgba(71, 147, 255, 0.30)"
    foregroundColor="#5993e5"
  >
    <rect x="0" y="0" rx="10" ry="10" width="215" height="205" /> 
  </ContentLoader>
)

export default HourSkeleton