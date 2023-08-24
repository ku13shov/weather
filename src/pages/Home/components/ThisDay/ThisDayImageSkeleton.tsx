import ContentLoader from "react-content-loader"

const ThisDayImageSkeleton = () => (
  <ContentLoader 
    speed={2}
    backgroundColor="rgba(71, 147, 255, 0.30)"
    foregroundColor="#5993e5"
  >
    <rect x="0" y="0" rx="40" ry="40" width="130" height="130" />
  </ContentLoader>
)

export default ThisDayImageSkeleton