  <!DOCTYPE html>
  <html lang="@yield('language')">

  <head>
    @include('includes.head')
  </head>

  <body id="page-top">

    @if (env('APP_ENV' === 'production'))
      @include('counters.ya_counter');
      @include('counters.analyticstracking');
      @include('includes.vk_chat');
    @endif

    {{-- @include('includes.navbar') --}}

    @yield('content')

    @include('includes.footer')          
  </body>
  </html>
  