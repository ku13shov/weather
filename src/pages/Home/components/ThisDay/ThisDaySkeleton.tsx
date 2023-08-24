import ContentLoader from "react-content-loader"

const ThisDaySkeleton = () => (
  <ContentLoader 
    speed={2}
    width={360}
    height={260}
    viewBox="0 0 400 300"
    backgroundColor="rgba(71, 147, 255, 0.30)"
    foregroundColor="#5993e5"
  >
    <rect x="0" y="20" rx="10" ry="10" width="170" height="80" /> 
    <rect x="230" y="30" rx="50" ry="50" width="150" height="150" /> 
    <rect x="0" y="130" rx="10" ry="10" width="195" height="40" /> 
    <rect x="0" y="215" rx="10" ry="10" width="195" height="30" /> 
    <rect x="0" y="265" rx="10" ry="10" width="195" height="30" />
  </ContentLoader>
)

export default ThisDaySkeleton