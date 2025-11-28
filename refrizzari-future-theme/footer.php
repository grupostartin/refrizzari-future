</div><!-- #content -->

<footer>
    <div class="container">
        <div class="site-info">
            <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'refrizzari-future-theme' ) ); ?>">
                <?php
                /* translators: %s: CMS Name, i.e. WordPress. */
                printf( esc_html__( 'Proudly powered by %s', 'refrizzari-future-theme' ), 'WordPress' );
                ?>
            </a>
            <span class="sep"> | </span>
                <?php
                /* translators: 1: Theme name, 2: Theme author. */
                printf( esc_html__( 'Theme: %1$s by %2$s.', 'refrizzari-future-theme' ), 'Refrizzari Future', 'Antigravity' );
                ?>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
