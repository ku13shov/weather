import ContentLoader from "react-content-loader"

const ThisDayTextSkeleton = () => (
  <ContentLoader 
    speed={2}
    backgroundColor="rgba(71, 147, 255, 0.30)"
    foregroundColor="#5993e5"
  >
    <rect x="0" y="30" rx="10" ry="10" width="150" height="70" /> 
    <rect x="0" y="125" rx="10" ry="10" width="175" height="35" /> 
    <rect x="0" y="195" rx="10" ry="10" width="175" height="30" /> 
    <rect x="0" y="240" rx="10" ry="10" width="175" height="30" />
  </ContentLoader>
)

export default ThisDayTextSkeleton