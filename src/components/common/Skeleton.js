import React from "react";

function Skeleton() {
  return (
    <div>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={210}
        height={60}
      />
      <Skeleton animation="wave" variant="rounded" width={210} height={60} />
    </div>
  );
}

export default Skeleton;
