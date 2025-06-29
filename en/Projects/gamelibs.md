---
title: Nuget Packages for Ravenfield
description: "Plugin development dependencies for Ravenfield."
---

# GameLibs 

::: center
[![Copyrights](https://img.shields.io/badge/Copyrights%20BELONG%20TO-SteelRaven7%20AB.-lightblue.svg?style=for-the-badge&)](https://github.com/RavenfieldCommunity/ravenscriptidea/blob/main/LICENSE)

Nuget site：[Nuget](https://www.nuget.org/profiles/RavenfieldCommunity)
:::

## Description

Here we provide some dependencies for Ravenfield's BepInEX pulgin dev.

## Usage

:::tip
Recommended to use these packages with BepInEX official's nuget packages, command:
```sh
dotnet add package UnityEngine.Modules --version 2020.3.48 -s https://nuget.bepinex.dev/v3/index.json
```
:::

Run following dotnet CLI commands to add packages (default is latest version):
```sh
dotnet add package Ravenfield.GameLibs
dotnet add package Ravenfield.ThirdpartyLibs
```
Then you're recommended to add something to the similar lines in your project config (`.csproj`) like:

```xml
<PackageReference Include="Ravenfield.GameLibs" Version="0.XX.X" IncludeAssets="compile" />
<PackageReference Include="Ravenfield.ThirdpartyLibs" Version="0.XX.X" IncludeAssets="compile" />
```

Yes add property `IncludeAssets="compile"` so that the game dlls will not be exported while building your project.

## Details and changelogs



### `Ravenfield.GameLibs`

- Including dll:  `Assembly-CSharp.dll`

- Changelogs:
  - `0.32.0`

      First package, the `Assembly-CSharp.dll` was from early `beta` branch bulid of EA32 which the new game UI wasn't applied yet, so may more like EA31 one.
  - `0.32.1`

      The `Assembly-CSharp.dll` was from `test` branch bulid of EA32, though already some changes in game since this version's upload.

### `Ravenfield.ThirdpartyLibs`

- Including dll: 
  - `Assembly-CSharp-firstpass.dll`
  - `AstarPathfindingProject.dll`
  - `Autodesk.Fbx.dll`
  - `BakeryRuntimeAssembly.dll`
  - `com.rlabrecque.steamworks.net.dll`
  - `FbxBuildTestAssets.dll`
  - `netstandard.dll`
  - `Pathfinding.ClipperLib.dll`
  - `Pathfinding.Ionic.Zip.Reduced.dll`
  - `Pathfinding.Poly2Tri.dll`
  - `Unity.TextMeshPro.dll` (Added since `0.32.1`)
  - `UnityEngine.CoreModule.dll`
  - `UnityEngine.UI.dll`

- Changelogs:
  - `0.32.0`

      First package.

  - `0.32.1`

      Added `Unity.TextMeshPro.dll` for newer game's TMPro support.


## License

All the dlls (Dynamic Link Library) are from the game of SteelRaven7 AB.

The dlls are **NOT ALLOWED** to be used for any other purposes without the consent of the copyright owner, except for the development of Ravenfield additional features.