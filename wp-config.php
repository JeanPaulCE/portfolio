<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u975830576_Tzc9F' );

/** Database username */
define( 'DB_USER', 'u975830576_GYSo3' );

/** Database password */
define( 'DB_PASSWORD', 'LmclLswKcC' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'JgYo2pg] fk&ilC$-[>BIXpwvIiD6a7q[T5G.7ltp sN]47RMfy/~s/_Q8nP={qM' );
define( 'SECURE_AUTH_KEY',   'o[.LJXZ^kk@2Lql#8 c__$+=rg}>4;Oj,*lYLt^,)4dAaP^& dxm*xs8K`NAu,ag' );
define( 'LOGGED_IN_KEY',     '2.(b-C4+XMv;Dk~Lq*a76o<<?S:#&@hR[K(>y3!s+:$7sgA)=.9r/Xvo^m7FL8o&' );
define( 'NONCE_KEY',         'Y5_L.KBIwEEt,VXM/W}ZYwV,RjG#Ry;`;>Z)4@l.hH[%g~CxCr+3<`LD ,:iL$K{' );
define( 'AUTH_SALT',         '2lT0MQ2Q{Xm9+5Xx8EO64#jlUZ];129Cs&Hu@,=G3{H^rMU5#!B`Js(+PTGU371u' );
define( 'SECURE_AUTH_SALT',  ';?C*Tk8P86tY3Aw:GpTxR9bv&noyP,n xr{<7LmAn6&]8pV;(n;d/aVoDAsI0)D[' );
define( 'LOGGED_IN_SALT',    'h1wr1}y&Uj-=M}YS,VLHzkL[j2@gsEjl;JoLLaOwf,byr><[PX?ue?Po&&5ntxe+' );
define( 'NONCE_SALT',        'D^Ugjcnz6ARcST]gT-V5!u&u .!I;EQ)(.Ly.XHkRZ3L{#;rSurv]o<_b7}DF-3a' );
define( 'WP_CACHE_KEY_SALT', ';sdfg@@|Ar6(V1jl9nw%Wcme*A&n!CL)JdmJ*)Chj]!U3h##&gk[UsJcSXsdPO}*' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
