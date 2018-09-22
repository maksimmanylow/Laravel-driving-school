
            <!-- Navigation -->
            <nav class="navbar navbar-expand-lg navbar-light fixed-top <?= $isIndex ? '' : 'navbar-shrink' ?>" id="mainNav">
              <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="/">ВОЕНМЕХ.автошкола</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link <?= (Yii::$app->request->url == " /site " || Yii::$app->request->url == "/ ") ? 'active' : '' ?>" href="/">Главная</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  <?= (Yii::$app->request->url == " /site/groups ") ? 'active' : '' ?>" href="/site/groups">Запись</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  <?= (Yii::$app->request->url == " /site/news ") ? 'active' : '' ?>" href="/site/news">Новости</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" target="_blank" href="https://vk.com/voenmeh.avtoshkola">VK</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" target="_blank" href="https://www.facebook.com/bstuattcru/">Facebook</a>
                    </li>



                    <li class="nav-item">

                      <?php if (Yii::$app->user->isGuest) {
    ?>
                        <a class="nav-link" href="/site/login">Вход</a>
                        <?php
} else {
        ?>

                          <?php if (Yii::$app->user->can('admin')) {
            ?>
                            <a class="nav-link" href="/admin">Панель управления</a>
                            <?php
        } else {
            ?>
                              <a class="nav-link" href="/user">Личный кабинет</a>
                              <?php
        } ?>

                                <?php
    } ?>

                    </li>
                  </ul>
                </div>
              </div>
            </nav>