import React from "react";
import "../assets/logo-styles.css";

// HTML/CSS Logo Components for ABH - Aravind Bulk Harvest

// Clean Professional Logo
export const ABHPremiumLogo = () => (
  <div className="abh-clean-premium">
    <div className="logo-icon-section">
      <div className="leaf-icon">🌿</div>
      <div className="grain-icon">🌾</div>
    </div>
    <div className="text-section">
      <h1 className="abh-text">ABH</h1>
      <p className="company-name">Aravind Bulk Harvest</p>
      <p className="tagline">Premium Agricultural Products</p>
    </div>
  </div>
);

// Simple Elegant Design
export const ABHElegantLogo = () => (
  <div className="abh-simple-elegant">
    <div className="brand-container">
      <div className="icon-group">
        <span className="nature-icon">🌱</span>
        <span className="grain-icon">🌾</span>
      </div>
      <div className="brand-text">
        <h2 className="main-brand">ABH</h2>
        <p className="sub-brand">ARAVIND BULK HARVEST</p>
      </div>
    </div>
  </div>
);

// Clean Navbar Logo
export const ABHNavbarElegant = () => (
  <div className="abh-navbar-clean">
    <div className="navbar-icon">
      <span className="leaf-symbol">🌿</span>
    </div>
    <div className="navbar-text">
      <span className="navbar-abh">ABH</span>
      <span className="navbar-subtitle">Aravind Bulk Harvest</span>
    </div>
  </div>
);

export const ABHLogo1CSS = () => (
  <div className="abh-logo-1">
    <h1 className="main-text">ABH</h1>
    <p className="subtitle">ARAVIND BULK HARVEST</p>
  </div>
);

export const ABHLogo2CSS = () => (
  <div className="abh-logo-2">
    <div className="icon">ABH</div>
    <div className="text">
      <h2 className="company-name">Aravind Bulk Harvest</h2>
      <p className="tagline">Premium Agricultural Products</p>
    </div>
  </div>
);

export const ABHLogo3CSS = () => (
  <div className="abh-logo-3">
    <h1 className="main">ABH</h1>
    <p className="sub">ARAVIND BULK HARVEST</p>
  </div>
);

export const ABHLogo4CSS = () => (
  <div className="abh-logo-4">
    <h1 className="abh">ABH</h1>
    <div className="separator"></div>
    <div className="full-name">
      <h2 className="aravind">ARAVIND</h2>
      <p className="bulk-harvest">BULK HARVEST</p>
    </div>
  </div>
);

export const ABHLogo5CSS = () => (
  <div className="abh-logo-5">
    <h1 className="company">ABH</h1>
    <p className="description">Aravind Bulk Harvest</p>
    <p className="est">Quality Agricultural Products Since Inception</p>
  </div>
);

// Demo component to showcase all logos
export const LogoShowcase = () => (
  <div
    style={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
    }}
  >
    <h2 style={{ color: "#228B22", fontSize: "2rem", marginBottom: "20px" }}>
      🌾 Agricultural Product Logos
    </h2>

    <div
      style={{
        border: "2px solid #228B22",
        padding: "25px",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      <h3 style={{ color: "#8B4513", marginBottom: "15px" }}>
        Logo 1 - Premium Vessel Design
      </h3>
      <ABHPremiumLogo />
    </div>

    <div
      style={{
        border: "2px solid #228B22",
        padding: "25px",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      <h3 style={{ color: "#8B4513", marginBottom: "15px" }}>
        Logo 2 - Elegant Agricultural
      </h3>
      <ABHElegantLogo />
    </div>

    <div
      style={{
        border: "2px solid #228B22",
        padding: "25px",
        borderRadius: "12px",
        backgroundColor: "white",
      }}
    >
      <h3 style={{ color: "#8B4513", marginBottom: "15px" }}>
        Logo 3 - Navbar Elegant
      </h3>
      <ABHNavbarElegant />
    </div>

    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <p style={{ color: "#666", fontSize: "14px" }}>
        Choose your favorite and we'll integrate it!
      </p>
    </div>
  </div>
);
