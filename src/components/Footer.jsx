import React from "react";

export default function Footer() {
  const style = {
    "background-color": "rgba(0, 0, 0, 0.2)",
  };
  return (
    <div>
      <footer class="text-center text-lg-start">
        <div class="text-center p-3" style={style}>
          Copyright © 2023 Ciherang Squad - All rights reserved
        </div>
      </footer>
    </div>
  );
}
