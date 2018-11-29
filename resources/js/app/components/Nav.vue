<template>
  <nav
    id="mainNav"
    class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a
        class="navbar-brand js-scroll-trigger"
        href="/">ВОЕНМЕХ.автошкола</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>
      <div
        id="navbarResponsive"
        class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <slot/>
        </ul>
      </div>
    </div>
  </nav>
</template>
