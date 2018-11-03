<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a 
      class="navbar-brand" 
      href="#">
      <img 
        src="../assets/logo.png" 
        width="30" 
        height="30" 
        alt="vue logo">
    </a>
    <button 
      class="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>
    <div 
      id="navbarNav" 
      class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <slot/>
      </ul>
    </div>
  </nav>
</template>
