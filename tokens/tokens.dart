// Hierarchy Technologies — design tokens (Flutter / Dart).
// Derived from tokens.json. Do not edit by hand — regenerate from source.
//
// Usage:
//   import 'package:hierarchy_brand/tokens.dart';
//   Container(color: HtColors.brandAzure500);

import 'package:flutter/material.dart';

class HtColors {
  HtColors._();

  // Brand — azure
  static const Color brandAzure50  = Color(0xFFEEF2FA);
  static const Color brandAzure100 = Color(0xFFDBE3F4);
  static const Color brandAzure200 = Color(0xFFB3C2E5);
  static const Color brandAzure300 = Color(0xFF8AA1D7);
  static const Color brandAzure400 = Color(0xFF6480C2);
  static const Color brandAzure500 = Color(0xFF4261AD);
  static const Color brandAzure600 = Color(0xFF36529A);
  static const Color brandAzure700 = Color(0xFF2A4280);
  static const Color brandAzure800 = Color(0xFF1F3266);
  static const Color brandAzure900 = Color(0xFF15224D);

  // Brand — indigo
  static const Color brandIndigo50  = Color(0xFFEFEDFA);
  static const Color brandIndigo100 = Color(0xFFDBD7F2);
  static const Color brandIndigo200 = Color(0xFFB6AEE0);
  static const Color brandIndigo300 = Color(0xFF8C82CB);
  static const Color brandIndigo400 = Color(0xFF635AB0);
  static const Color brandIndigo500 = Color(0xFF392F8E);
  static const Color brandIndigo600 = Color(0xFF2F2778);
  static const Color brandIndigo700 = Color(0xFF251E60);
  static const Color brandIndigo800 = Color(0xFF1B1648);
  static const Color brandIndigo900 = Color(0xFF110D30);

  // Brand — violet
  static const Color brandViolet50  = Color(0xFFF0EDF9);
  static const Color brandViolet100 = Color(0xFFDDD7F1);
  static const Color brandViolet200 = Color(0xFFBAAEE0);
  static const Color brandViolet300 = Color(0xFF9282CB);
  static const Color brandViolet400 = Color(0xFF6A55AE);
  static const Color brandViolet500 = Color(0xFF482D89);
  static const Color brandViolet600 = Color(0xFF3C2575);
  static const Color brandViolet700 = Color(0xFF2F1D5F);
  static const Color brandViolet800 = Color(0xFF221548);
  static const Color brandViolet900 = Color(0xFF160D30);

  // Neutral
  static const Color neutral0    = Color(0xFFFFFFFF);
  static const Color neutral50   = Color(0xFFFAFAFA);
  static const Color neutral100  = Color(0xFFF4F4F5);
  static const Color neutral200  = Color(0xFFE4E4E7);
  static const Color neutral300  = Color(0xFFD4D4D8);
  static const Color neutral400  = Color(0xFFA1A1AA);
  static const Color neutral500  = Color(0xFF71717A);
  static const Color neutral600  = Color(0xFF52525B);
  static const Color neutral700  = Color(0xFF3F3F46);
  static const Color neutral800  = Color(0xFF27272A);
  static const Color neutral900  = Color(0xFF231F20);
  static const Color neutral1000 = Color(0xFF000000);

  // Semantic
  static const Color success500 = Color(0xFF16A34A);
  static const Color warning500 = Color(0xFFD97706);
  static const Color danger500  = Color(0xFFDC2626);
  static const Color info500    = brandAzure500;

  // Surface / Text aliases
  static const Color surfaceBackground = neutral0;
  static const Color surfaceSubtle     = neutral50;
  static const Color surfaceRaised     = neutral100;
  static const Color surfaceInverse    = neutral900;

  static const Color textPrimary   = neutral900;
  static const Color textSecondary = neutral700;
  static const Color textMuted     = neutral500;
  static const Color textInverse   = neutral0;
  static const Color textLink      = brandAzure700;
}

class HtGradients {
  HtGradients._();

  // Use ON LIGHT SURFACES ONLY.
  static const LinearGradient brand = LinearGradient(
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
    stops: [0.0, 0.5, 1.0],
    colors: [
      HtColors.brandAzure500,
      HtColors.brandIndigo500,
      HtColors.brandViolet500,
    ],
  );

  // Light-shifted (-300 ramp). Use on dark surfaces.
  static const LinearGradient brandReversed = LinearGradient(
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
    stops: [0.0, 0.5, 1.0],
    colors: [
      HtColors.brandAzure300,
      HtColors.brandIndigo300,
      HtColors.brandViolet300,
    ],
  );
}

class HtFonts {
  HtFonts._();
  static const String display = 'Sora';
  static const String body    = 'Inter';
  static const String mono    = 'JetBrainsMono';
}

class HtFontSizes {
  HtFontSizes._();
  static const double xs   = 12.0;
  static const double sm   = 14.0;
  static const double base = 16.0;
  static const double lg   = 18.0;
  static const double xl   = 20.0;
  static const double size2xl = 25.0;
  static const double size3xl = 31.25;
  static const double size4xl = 39.06;
  static const double size5xl = 48.83;
  static const double size6xl = 61.04;
}

class HtSpacing {
  HtSpacing._();
  static const double s0  = 0.0;
  static const double s1  = 4.0;
  static const double s2  = 8.0;
  static const double s3  = 12.0;
  static const double s4  = 16.0;
  static const double s5  = 20.0;
  static const double s6  = 24.0;
  static const double s8  = 32.0;
  static const double s10 = 40.0;
  static const double s12 = 48.0;
  static const double s16 = 64.0;
  static const double s24 = 96.0;
}

class HtRadii {
  HtRadii._();
  static const Radius none = Radius.zero;
  static const Radius sm   = Radius.circular(4.0);
  static const Radius md   = Radius.circular(8.0);
  static const Radius lg   = Radius.circular(12.0);
  static const Radius xl   = Radius.circular(16.0);
  static const Radius pill = Radius.circular(9999.0);
}

class HtMotion {
  HtMotion._();
  static const Duration fast = Duration(milliseconds: 120);
  static const Duration base = Duration(milliseconds: 200);
  static const Duration slow = Duration(milliseconds: 320);
  static const Curve standard = Cubic(0.2, 0, 0, 1);
  static const Curve emphasis = Cubic(0.3, 0, 0, 1);
}
