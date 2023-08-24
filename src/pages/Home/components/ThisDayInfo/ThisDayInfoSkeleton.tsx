import ContentLoader from "react-content-loader"

const ThisDayInfoSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={20}
    viewBox="0 0 300 20"
    backgroundColor="rgba(71, 147, 255, 0.30)"
    foregroundColor="#5993e5"
  >
    <rect x="0" y="0" rx="10" ry="10" width="280" height="18" /> 
  </ContentLoader>
)

export default ThisDayInfoSkeleton