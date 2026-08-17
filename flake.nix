{
  description = "Ethan's Website Dev Flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = inputs@{ self, nixpkgs, ... }:
  let
      forAllSystems = nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed;
  in
    {
      devShell = forAllSystems (system:
        let
          pkgs = import nixpkgs { inherit system; };
          # https://nixos.wiki/wiki/Fonts#Install_fonts_in_nix-shells
          fonts = with pkgs; [
            inconsolata
            libertinus
          ];
          fontsConf = pkgs.makeFontsConf {
            fontDirectories = fonts;
          };
        in
        with pkgs;
        mkShell {
          name = "dev shell";
          buildInputs = [
            gitMinimal
            latexrun
            mdcat
            nixfmt
            nodejs
            pnpm
            (typst.withPackages (ps: with ps; [
              parcio-slides
              mmdr
            ]))
            texliveFull
          ];

          shellHook = ''
            export FONTCONFIG_FILE="${fontsConf}"
            export TYPST_FONT_PATHS="${pkgs.lib.makeSearchPath "share/fonts" fonts}"
          '';
        }
      );
    };
}
