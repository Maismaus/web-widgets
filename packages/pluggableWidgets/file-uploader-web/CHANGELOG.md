# Changelog

All notable changes to this widget will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2025-04-16

### Changed

- We updated studio pro minimum version to 10.21 to support Mendix 11.

## [2.0.0] - 2025-03-14

### Added

- We made "Action to create new files/images" preconfigured with corresponding nanoflows.

## [1.0.3] - 2025-02-28

### Fixed

- We fixed an issue with long file names causing text to extend beyond the widget.

## [1.0.2] - 2025-02-14

### Fixed

- We fixed an issue where an error occurred when uploading multiple files on a newly created context object.

- We fixed an issue where, in image mode, users could upload unsupported image formats.

### Added

- We improved handling of the File/Image creation action. It is now easier to spot misconfigured actions through console warnings.

- We added timeout functionality for the File/Image creation action. It will abort the file uploading process if an object is not created within a certain time.

- We added a setting to enable read-only mode.

## [1.0.1] - 2024-12-19

### Added

- The file uploader widget enables you to upload files by dragging and dropping them onto the widget or by using the file selection dialog.
