# [2.6.0](https://github.com/anncwb/vue-vben-admin/compare/v2.5.2...v2.6.0) (2021-07-04)

### Bug Fixes

- **axios:** option `withToken` not work ([d509e89](https://github.com/anncwb/vue-vben-admin/commit/d509e897be5753c852e912112e70dac6247ba467))
- **demo:** account list fetch loss param ([424b171](https://github.com/anncwb/vue-vben-admin/commit/424b171e0db727f5e0157cbcfd5460f15f8ea609)), closes [#830](https://github.com/anncwb/vue-vben-admin/issues/830)
- **demo:** fix async tree demo, fixed: [#823](https://github.com/anncwb/vue-vben-admin/issues/823) ([5637588](https://github.com/anncwb/vue-vben-admin/commit/5637588fce880b01137191cc82c73e0fce621e8c))
- **form:** fix some prop declaration ([b5046f0](https://github.com/anncwb/vue-vben-admin/commit/b5046f07a27e8ca7fc8b961b74fa5e1b0d715149))
- **lock-screen:** ensure lock info is saved ([d38ff66](https://github.com/anncwb/vue-vben-admin/commit/d38ff6670a37478b31447f8058e786c4b044e218))
- **lock-screen:** fix lock-screen can skip on new window ([d7b84c7](https://github.com/anncwb/vue-vben-admin/commit/d7b84c78744f7d0077a779b232e1358040b50383))
- **menu:** make sure the menu is activated correctly ([cdb10cc](https://github.com/anncwb/vue-vben-admin/commit/cdb10cc4ac5e5e8f9cce3ff18d8fbd29ef10c86f))
- **modal:** `setModalProps` support `defaultFullscreen` ([c7de65e](https://github.com/anncwb/vue-vben-admin/commit/c7de65ebba53941771153f18b184d3d4d31c0dbf))
- **modal:** maskClosable not work ([f750ff4](https://github.com/anncwb/vue-vben-admin/commit/f750ff435fee06acee78d6b9633e6e18d91685f8))
- **modal:** remove console log ([3dbbde2](https://github.com/anncwb/vue-vben-admin/commit/3dbbde2662352780377a9b216598d9348522f6ba))
- **popconfirm-button:** remove button excess `title` ([73654b7](https://github.com/anncwb/vue-vben-admin/commit/73654b7862c59d623d6d5dc7dcf6ff2704564d9a))
- **sider:** bottom trigger not work ([1bde404](https://github.com/anncwb/vue-vben-admin/commit/1bde4041211229d5d9d01ce0ca806fa99356b6de)), closes [#820](https://github.com/anncwb/vue-vben-admin/issues/820)
- **sider:** custom trigger does not take effect ([5005e6e](https://github.com/anncwb/vue-vben-admin/commit/5005e6e56b1cc7763a1cc23e1162dfb49452013b))
- **svg-icon:** fix SvgIcon style ([99829c7](https://github.com/anncwb/vue-vben-admin/commit/99829c79ab41a2319f40c5595a7d82d9e406ba18))
- **table:** auto hide unnecessary scrollbar ([735028c](https://github.com/anncwb/vue-vben-admin/commit/735028c43055e8e80ebc7344af0cd0f51c744f98))
- **table:** global configuration accidentally modified ([b4a3f93](https://github.com/anncwb/vue-vben-admin/commit/b4a3f936cd19bf1fff3a331bacad60e79d2d6c22))
- **table:** param of `handleSearchInfoFn` ([791b323](https://github.com/anncwb/vue-vben-admin/commit/791b323dbd30acd7fabfe9c3fb6e528916311ffd))
- **tailwindcss:** remove console warnings ([acacb32](https://github.com/anncwb/vue-vben-admin/commit/acacb32bb592345cd0a90b4bbeb60a9b6ab1ac3c))
- `hasPermission` not work in `ROLE` Mode ([76a5f87](https://github.com/anncwb/vue-vben-admin/commit/76a5f87c0ce871cca48b9e4c32331353a796e7d2))
- routes filter can't effective when permission mode set to ROUTE_MAPPING ([#836](https://github.com/anncwb/vue-vben-admin/issues/836)) ([3871204](https://github.com/anncwb/vue-vben-admin/commit/3871204d08d481b8984440cd60bbf2bacb58d063))
- **table:** selection-change not triggered on row click ([6f845b5](https://github.com/anncwb/vue-vben-admin/commit/6f845b53bdc4c33fbca3e65f10f64c63166bed0e))
- multi windows token sharing ([e5f3788](https://github.com/anncwb/vue-vben-admin/commit/e5f37885ffb32d04d244f0ef39ac660dda6b71e1)), closes [#761](https://github.com/anncwb/vue-vben-admin/issues/761)
- support various vite modes of build, not just production ([#832](https://github.com/anncwb/vue-vben-admin/issues/832)) ([95c16a5](https://github.com/anncwb/vue-vben-admin/commit/95c16a5d26f9fd9a1d11894afe1146ca495eee93))
- **table:** editComponentProps support onChange ([829b366](https://github.com/anncwb/vue-vben-admin/commit/829b366cb2abf27e69d9665e5be022b3d3f15655))
- **table:** fix rowSelection.onChange not work ([df0f000](https://github.com/anncwb/vue-vben-admin/commit/df0f00085c1113eddd7a15954818ccece3538068)), closes [#825](https://github.com/anncwb/vue-vben-admin/issues/825)

### Features

- **avatar-cropper:** add action tooltip ([6cbac4b](https://github.com/anncwb/vue-vben-admin/commit/6cbac4b7ece60a1a7c1fda931cfffce42dfe3e51))
- **avatar-cropper:** more props added ([b96ea07](https://github.com/anncwb/vue-vben-admin/commit/b96ea0753bfd769693a368cf1e3d8316688c0dcb))
- **axios:** add `withToken` option ([c99cf5e](https://github.com/anncwb/vue-vben-admin/commit/c99cf5e53f057cdc332ab6c0635adf9c2d27de29))
- **axios:** use `defHttp` like `axios` ([49f39de](https://github.com/anncwb/vue-vben-admin/commit/49f39de7b40e3ec8343bdeaf3eb00fd79d395746)), closes [#850](https://github.com/anncwb/vue-vben-admin/issues/850)
- **basic-upload:** `value` support v-model ([16c5d32](https://github.com/anncwb/vue-vben-admin/commit/16c5d327f1209f7c7437acde2ab0fa031da6a641))
- **basic-upload:** add preview-delete event ([49e72a8](https://github.com/anncwb/vue-vben-admin/commit/49e72a8e76b78fe54e19de9e23d7c72a19427f01)), closes [#835](https://github.com/anncwb/vue-vben-admin/issues/835)
- **modal:** add `tooltip` for action buttons ([c3b9076](https://github.com/anncwb/vue-vben-admin/commit/c3b907656a5fad7a9b241562179f7a0f6fe0e6f0))
- **param-menu:** feature: menu with params ([#845](https://github.com/anncwb/vue-vben-admin/issues/845)) ([48fcd76](https://github.com/anncwb/vue-vben-admin/commit/48fcd7684cabff66e8648b71527c6cb4ce7d03be))
- **route:** add `hidePathForChildren` in `meta` ([d52b0de](https://github.com/anncwb/vue-vben-admin/commit/d52b0de83e69f7505c28e6f59ec84bbe526ecd0d))
- **table:** support asynchrony in beforeFetch and afterFetch ([#827](https://github.com/anncwb/vue-vben-admin/issues/827)) ([749ba5c](https://github.com/anncwb/vue-vben-admin/commit/749ba5c1daf459625518937c239787b756c0a780))
- **table-action:** support `tooltip` option ([5fab267](https://github.com/anncwb/vue-vben-admin/commit/5fab267a69600fdf5d7a7f9e4d9fff859d09dede)), closes [#848](https://github.com/anncwb/vue-vben-admin/issues/848)
- **tree:** add `insertNodesByKey` method ([5a20df4](https://github.com/anncwb/vue-vben-admin/commit/5a20df45ad36b523d48bf7fe11bdb10a6d03df64))
- routers support `ignoreRoute` option ([72ac240](https://github.com/anncwb/vue-vben-admin/commit/72ac240f2858cd74cb62b7647ca89d63bb71d247))

### Performance Improvements

- **scrollbar:** scrollbar update when slot changed ([e9e51b2](https://github.com/anncwb/vue-vben-admin/commit/e9e51b2fdc879a66d8df08504a0955c9c21e3e27))

## [2.5.1](https://github.com/anncwb/vue-vben-admin/compare/v2.4.0...v2.5.1) (2021-06-26)

### Bug Fixes

- **comp-tree:** support comp-tree-foreach stop,add insertNodesByKey ([#818](https://github.com/anncwb/vue-vben-admin/issues/818)) ([d97aa92](https://github.com/anncwb/vue-vben-admin/commit/d97aa927417bf45a7c127ecfa9b8e835b6b68855))
- fix antdv console warning ([480cfb9](https://github.com/anncwb/vue-vben-admin/commit/480cfb914e78c06eb7784e33465ed91b7d4c3eee))
- fix defHttp baseUrl work ([d5f9919](https://github.com/anncwb/vue-vben-admin/commit/d5f9919b60fdd7d5c435129e8db519c0bbd37529))
- **api:** select api type error ([b387681](https://github.com/anncwb/vue-vben-admin/commit/b387681c00ac018f5bc6a9251009ddffe37acae6))
- **api-select:** ensure that the onchange function parameters are correct ([fa64fc8](https://github.com/anncwb/vue-vben-admin/commit/fa64fc8a622832b87fdf672965d55d543b5929a2))
- **api-select:** loss option data on event callback ([c5f2577](https://github.com/anncwb/vue-vben-admin/commit/c5f2577f515e7ae96b27b509e5dd4b3317fcb7b4)), closes [#733](https://github.com/anncwb/vue-vben-admin/issues/733)
- **ApiSelect demo:** add demo about ApiSelect's use ([#757](https://github.com/anncwb/vue-vben-admin/issues/757)) ([a03d3cc](https://github.com/anncwb/vue-vben-admin/commit/a03d3cc60c770eba644c1f3837850a2c1c015029))
- **demo:** `breadcrumb` route invalid redirect ([84d9300](https://github.com/anncwb/vue-vben-admin/commit/84d9300e52fa73da575591aa4b71858a7e459c8c))
- **demo:** account list page validate and save ([21f7a85](https://github.com/anncwb/vue-vben-admin/commit/21f7a854fe2455315287d04e895661ff739bce17))
- **demo:** make sure the map https resource is correct ([7b9cd09](https://github.com/anncwb/vue-vben-admin/commit/7b9cd09ad8a50c45b2e661e07953d786d82f367d))
- **demo:** style error,fix [#806](https://github.com/anncwb/vue-vben-admin/issues/806) ([a2d8be3](https://github.com/anncwb/vue-vben-admin/commit/a2d8be3ab29da88126f3ba971f6893cb12327759))
- **demo-form:** add fieldMapToTime example,fix [#807](https://github.com/anncwb/vue-vben-admin/issues/807) ([a2a75a0](https://github.com/anncwb/vue-vben-admin/commit/a2a75a097ff6c9df12471eff0d62d44d2b88cfff))
- **design:** correct tailwind configuration,fix [#800](https://github.com/anncwb/vue-vben-admin/issues/800) ([aec230c](https://github.com/anncwb/vue-vben-admin/commit/aec230ca19d541079b64c54ba00596ef9cd92ca0))
- **dropdown:** icon and trigger work unexpected ([60b80c9](https://github.com/anncwb/vue-vben-admin/commit/60b80c96e82da9101d56b2e195e9e7571de11f0a)), closes [#796](https://github.com/anncwb/vue-vben-admin/issues/796) [#787](https://github.com/anncwb/vue-vben-admin/issues/787)
- **flow-chart:** fix drag and drop menu loss ([fa828fd](https://github.com/anncwb/vue-vben-admin/commit/fa828fd972efeea87f364be76a1139ae53ec20d8))
- **form:** loss args on component change event ([513823b](https://github.com/anncwb/vue-vben-admin/commit/513823bfbd3e8acc68098e0708c34bff2dd8dba6))
- **layout:** props warn ([#756](https://github.com/anncwb/vue-vben-admin/issues/756)) ([bbce002](https://github.com/anncwb/vue-vben-admin/commit/bbce002be170c52db984647c931db88d7724cb52))
- **menu:** fix the jitter problem of menu folding animation,fix [#732](https://github.com/anncwb/vue-vben-admin/issues/732) ([4c89ea7](https://github.com/anncwb/vue-vben-admin/commit/4c89ea7474f4315870df1790f99f3e431f343b90))
- **mock:** make sure ignore matches the file correctly, fix [#745](https://github.com/anncwb/vue-vben-admin/issues/745) ([a222ec8](https://github.com/anncwb/vue-vben-admin/commit/a222ec8553f9b4477a43a8f7d113b5646fbfc373))
- **mock:** type error ([7c1ffa3](https://github.com/anncwb/vue-vben-admin/commit/7c1ffa3d23de508a8d1590985806cb7a484b24e5))
- **modal:** add v-model support for visible ([de12bab](https://github.com/anncwb/vue-vben-admin/commit/de12babd314ac831d3cb645f42dbf8a476075623))
- **modal:** ensure that the full screen height is calculated correctly ([1c1755c](https://github.com/anncwb/vue-vben-admin/commit/1c1755cf5b4ada7263c05ddf4105abb52a2abb2f))
- **modal:** ensure that the shutdown event is not triggered multiple times ([655b743](https://github.com/anncwb/vue-vben-admin/commit/655b74323653147943cbde2352208cb765c82b8a))
- **pop-confirm:** fix event working unexpected ([a6ef771](https://github.com/anncwb/vue-vben-admin/commit/a6ef771fcce14c3644c965afaa69b3a17d0a7087))
- **route:** dynamically introduce components error ([c6b766d](https://github.com/anncwb/vue-vben-admin/commit/c6b766d8ea902294ab1f7e4a06781f2bcfdd1f0b))
- **router:** loss `directory` route ([df8cd86](https://github.com/anncwb/vue-vben-admin/commit/df8cd860514f32f44847dcf724f0737ed4d8b9e0)), closes [#722](https://github.com/anncwb/vue-vben-admin/issues/722)
- **store:** fix type error after pinia version upgrade ([e8d6f88](https://github.com/anncwb/vue-vben-admin/commit/e8d6f8851efd7076946486864936f1797280d3ba))
- **table:** event editCancel loss params ([8d22231](https://github.com/anncwb/vue-vben-admin/commit/8d22231a5fa4afed19201a4a4e5c29d674498516))
- **table:** fix table jitter problem ([8eba7fb](https://github.com/anncwb/vue-vben-admin/commit/8eba7fb52786d1977e4cb7b67673d74c91c5c827))
- **table:** getDataSource not worked on empty data ([e78af6f](https://github.com/anncwb/vue-vben-admin/commit/e78af6f228e25f052dc4c5a1859a6db50e0b112e)), closes [#752](https://github.com/anncwb/vue-vben-admin/issues/752)
- **table:** treeTable editable error ([4ae39c5](https://github.com/anncwb/vue-vben-admin/commit/4ae39c53b49532fc6c31086a31e30429d2e236ed)), closes [#811](https://github.com/anncwb/vue-vben-admin/issues/811)
- **upload:** make sure to carry custom parameters, fix [#802](https://github.com/anncwb/vue-vben-admin/issues/802) ([c4b22a2](https://github.com/anncwb/vue-vben-admin/commit/c4b22a225d0088d87be0c0068f543366312521db))
- **use-message:** `content` not support vNode ([154ebc3](https://github.com/anncwb/vue-vben-admin/commit/154ebc3d96f73bb3ceab99ea0229a3619d585aba))
- build error ([5212ea7](https://github.com/anncwb/vue-vben-admin/commit/5212ea79b43c832a5136354b549de8f89b6e2156))
- **avatar:** mock data and Account center style ([2066f66](https://github.com/anncwb/vue-vben-admin/commit/2066f669715491f3e91ac6d0e905cd2b3e80b58d))
- **axios:** make sure that the parameter is an object before processing, fix [#660](https://github.com/anncwb/vue-vben-admin/issues/660) ([834fa7e](https://github.com/anncwb/vue-vben-admin/commit/834fa7eb9c8aff252e083d38fdab4f6f53b4d43a))
- **axios:** transformRequestHook logic error ([b69dcd7](https://github.com/anncwb/vue-vben-admin/commit/b69dcd79d742fd171302ce0f48c7750d60da217f))
- **code-editor:** fix CodeEditor style problem, fix [#655](https://github.com/anncwb/vue-vben-admin/issues/655) ([5662804](https://github.com/anncwb/vue-vben-admin/commit/566280422de0537c4e31496eaaa95a9d51fe9458))
- **codeeditor:** empty value set failed.fixed:[#659](https://github.com/anncwb/vue-vben-admin/issues/659) ([ba2bebb](https://github.com/anncwb/vue-vben-admin/commit/ba2bebb4069085817a90d065ed5877fdb50a8039))
- **codeMirror:** fix the JsonEditor embedded in the bullet frame causing the style to be disordered ([#668](https://github.com/anncwb/vue-vben-admin/issues/668)) ([e1123a2](https://github.com/anncwb/vue-vben-admin/commit/e1123a2ccb5d5450a5072c19e5508a5dc0f14423))
- **demo:** fix basic form page style ([8b6e07b](https://github.com/anncwb/vue-vben-admin/commit/8b6e07b768f110f13b4f2efa6c46e03266667a8c))
- **form:** fix form update problem ([bcad95d](https://github.com/anncwb/vue-vben-admin/commit/bcad95d32a08a73f84ecbabab409cd64159f4077)), closes [#720](https://github.com/anncwb/vue-vben-admin/issues/720)
- **form:** radioButtonGroup value support boolean ([9e2aa20](https://github.com/anncwb/vue-vben-admin/commit/9e2aa20daa08d2902cb5d56c1560306947e44939))
- **form:** radioButtonGroup value support number ([bbddf30](https://github.com/anncwb/vue-vben-admin/commit/bbddf30e96feb1ab048323d93d3b8c1b18857acd))
- **form:** schemas update problem ([808328d](https://github.com/anncwb/vue-vben-admin/commit/808328dc7e56b1cc07b678d501d9589290173443)), closes [#688](https://github.com/anncwb/vue-vben-admin/issues/688)
- **keep-alive:** tablist cache updating effect ([d62d0ca](https://github.com/anncwb/vue-vben-admin/commit/d62d0ca08cff442c23eb9265851b066a2f24afa8)), closes [#695](https://github.com/anncwb/vue-vben-admin/issues/695)
- **layout:** fix class loss ([d018363](https://github.com/anncwb/vue-vben-admin/commit/d018363ddcd68189a18829a2b2560f3b98da58a6))
- **layout:** fix style compatibility issues ([905e5b7](https://github.com/anncwb/vue-vben-admin/commit/905e5b714b582548f32feca723012124343686a6))
- **lock:** fix lock modal height ([40e3cb0](https://github.com/anncwb/vue-vben-admin/commit/40e3cb043c90a8343fa44a32acad2cb77de732da)), closes [#701](https://github.com/anncwb/vue-vben-admin/issues/701)
- **log:** fix Wrong version number ([#653](https://github.com/anncwb/vue-vben-admin/issues/653)) ([4f0d45f](https://github.com/anncwb/vue-vben-admin/commit/4f0d45f1df48755eadc0b09fa19762ee68f9abd1))
- **login:** login page modal style fixed: [#662](https://github.com/anncwb/vue-vben-admin/issues/662) ([#666](https://github.com/anncwb/vue-vben-admin/issues/666)) ([b218f10](https://github.com/anncwb/vue-vben-admin/commit/b218f10e25a9364c399a5fe42eedb549f57c01ea))
- **mock:** menu list api loss `type` field ([4185412](https://github.com/anncwb/vue-vben-admin/commit/41854121f3713dbde236afd3a416e9f27bd0c673))
- **modal:** redoModalHeight not work as expected ([5d554f1](https://github.com/anncwb/vue-vben-admin/commit/5d554f184f7b61774d1a1b2e61451677b38505de))
- **page:** `basic form` action btns should be in line ([6c4f947](https://github.com/anncwb/vue-vben-admin/commit/6c4f947386c181f45253c94e4ef735d29a253053))
- **radio-button:** fix RadioButton `disabled` support ([ee384b1](https://github.com/anncwb/vue-vben-admin/commit/ee384b1fa7e387b3680e9d54cbe4a1e2f15ec750)), closes [#710](https://github.com/anncwb/vue-vben-admin/issues/710)
- **table:** wrong indeterminate state ([495b1da](https://github.com/anncwb/vue-vben-admin/commit/495b1da385e9b6428d2b994669d2065722445923))
- **table:** make sure the table width is correct, fix [#593](https://github.com/anncwb/vue-vben-admin/issues/593) ([d73d43e](https://github.com/anncwb/vue-vben-admin/commit/d73d43ed91f30957cfd202c51552ca40a19cef08))
- **table:** settings indeterminate state effect ([4fd2051](https://github.com/anncwb/vue-vben-admin/commit/4fd2051bc0403bfc5345ed6a5fc283a372ef7a92))
- **table:** support change event ([9f4d171](https://github.com/anncwb/vue-vben-admin/commit/9f4d1719caa76de94e6362c16e4df3ac28df253c)), closes [#677](https://github.com/anncwb/vue-vben-admin/issues/677)
- **table:** try to get close to the form stuck ([d81481c](https://github.com/anncwb/vue-vben-admin/commit/d81481c52186145dac130aaa1594f0ba8db4d392))
- **table:** useTable support onChange ([9f5085c](https://github.com/anncwb/vue-vben-admin/commit/9f5085c9f9f46b09391156b17091c1771bc13026))
- **table-action:** fix the split line style is missing,fix [#674](https://github.com/anncwb/vue-vben-admin/issues/674) ([b1cb863](https://github.com/anncwb/vue-vben-admin/commit/b1cb86350253dc5be095466966d9469775f4395d))
- **Tinymce:** Read only status upload button can also be used ([#718](https://github.com/anncwb/vue-vben-admin/issues/718)) ([966571b](https://github.com/anncwb/vue-vben-admin/commit/966571bdcb11c2729ab9ce212bd3e195f7bf3a59))
- **upload:** ensure preview items valid ([4376928](https://github.com/anncwb/vue-vben-admin/commit/437692869a232ee65c300c65ee473557ae0913c7))
- ensure that roleList is not empty ([aebad61](https://github.com/anncwb/vue-vben-admin/commit/aebad61b3d3e11aaf720b37e762e53e2e6999d3c))
- fix darkModeSwitch switch failure ([34a8054](https://github.com/anncwb/vue-vben-admin/commit/34a80542de670f0385dffaf5bf64bb9c3f6b90da))
- fix if getDropdownList.length==0 show Dropdown component ([21c771b](https://github.com/anncwb/vue-vben-admin/commit/21c771b59cb45defbff37de21c5c1950370b8f92))
- fix Login Page LocalePicker showLocale condition ([d683b0f](https://github.com/anncwb/vue-vben-admin/commit/d683b0f1e85b85b07090feba4ac7f741bd3bd482))
- fix node12 version data mock error ([644dbe3](https://github.com/anncwb/vue-vben-admin/commit/644dbe315bb03ea1641a682359873237208a5303))
- Fix the problem that the `lang` attribute of `HTML` will not be set when it is first loaded ([#682](https://github.com/anncwb/vue-vben-admin/issues/682)) ([eca8907](https://github.com/anncwb/vue-vben-admin/commit/eca8907a11c28d816c3da5a0667f45a38a499012))
- login failed ([035f55a](https://github.com/anncwb/vue-vben-admin/commit/035f55af9778819d72adc1700d9de56a6569b58f))
- session timeout login logic error ([#678](https://github.com/anncwb/vue-vben-admin/issues/678)) ([132c7fb](https://github.com/anncwb/vue-vben-admin/commit/132c7fb944df255c4d76a25d6d924439f91f9c54)), closes [#673](https://github.com/anncwb/vue-vben-admin/issues/673)
- **tree:** support defaultExpandAll prop ([3ed2339](https://github.com/anncwb/vue-vben-admin/commit/3ed2339a6d75abbd6ccf723b6eaa762f9921409e))
- **useViewHeight:** Fix the problem that useContentViewHeight does not calculate the footer ([#747](https://github.com/anncwb/vue-vben-admin/issues/747)) ([33cd8fe](https://github.com/anncwb/vue-vben-admin/commit/33cd8fe6533830176ab63ddfc4d74f75a384366c))
- theme switching fails ([7e2ca79](https://github.com/anncwb/vue-vben-admin/commit/7e2ca79ece2f5209cb7ce4b0f5ee15012f9f51de))

### Features

- **demo:** add route multi tabs show ([0e414ba](https://github.com/anncwb/vue-vben-admin/commit/0e414ba3c10b4e47a85feb1a38cae66c815719d8)), closes [#817](https://github.com/anncwb/vue-vben-admin/issues/817)
- add Tree LoadData demo ([9298b3c](https://github.com/anncwb/vue-vben-admin/commit/9298b3c988c10b81d83430ca31b9ce1d98a3fad9))
- optimize error message for api failure ([ea6834a](https://github.com/anncwb/vue-vben-admin/commit/ea6834aeec3ef56d411b2c10a474f75d3d7bfdfc))
- **api-select:** auto refetch after params changed ([50207ad](https://github.com/anncwb/vue-vben-admin/commit/50207ad702ef3faca1e27c873c89132ab92fae8e))
- **app-search:** auto focus on show ([1ae6362](https://github.com/anncwb/vue-vben-admin/commit/1ae636296df2cf99e8a777f053c539c50e6ad49a))
- **axios:** added authenticationScheme configuration,fix [#774](https://github.com/anncwb/vue-vben-admin/issues/774) ([b6d5b07](https://github.com/anncwb/vue-vben-admin/commit/b6d5b0796de4d0b66c0f33c335ec991d44f64ef2))
- **demo:** `switch` use in table ([46899aa](https://github.com/anncwb/vue-vben-admin/commit/46899aa3cd6b1616c42ac263a28af75be839f6a0))
- **demo:** added guide page example ([d196340](https://github.com/anncwb/vue-vben-admin/commit/d196340d270d2becbf2cc81b7d4f09273381bd09))
- **echarts:** add getInstance for useECharts ([fb6c76d](https://github.com/anncwb/vue-vben-admin/commit/fb6c76db535bd0c6305d03c0cff876a1f079100b))
- **modal:** add closeModal for useModal ([6d5f9aa](https://github.com/anncwb/vue-vben-admin/commit/6d5f9aa699c5da8af6bf5841baddc4a8bd603917))
- **modal:** add redoModalHeight for useModalInner ([f732b56](https://github.com/anncwb/vue-vben-admin/commit/f732b569042f7fe77c85cb295538ddd85561f7e9))
- **preview:** added createImgPreview picture preview function ([305630e](https://github.com/anncwb/vue-vben-admin/commit/305630e3fd886b3f690f890a934a8a6ba224fba1))
- **project-setting:** added sessionTimeoutProcessing project configuration item,fix [#772](https://github.com/anncwb/vue-vben-admin/issues/772) ([0d07084](https://github.com/anncwb/vue-vben-admin/commit/0d0708409c4adbe7a0c5e33abf5307031147eaeb))
- **table:** add editable DatePicker & TimePicker ([#654](https://github.com/anncwb/vue-vben-admin/issues/654)) ([93006c7](https://github.com/anncwb/vue-vben-admin/commit/93006c7dc7b5243b26637f444c8057c95935e622))
- **table:** add updateTableDataRecord method ([8e4f486](https://github.com/anncwb/vue-vben-admin/commit/8e4f486fcf835f0b6f2a95676dba268ffdd0566e))
- **table:** editable component text align ([8eaf575](https://github.com/anncwb/vue-vben-admin/commit/8eaf57562610a833c8083ae9957f458319d1cc93))
- **table:** support columns-change event ([125a7d1](https://github.com/anncwb/vue-vben-admin/commit/125a7d14831642c9cbb2e4b3e75953c3b2e2cdef))
- **table:** support custom update on row editing ([fe2bcfc](https://github.com/anncwb/vue-vben-admin/commit/fe2bcfc6f74159c355f3be153a316869fdb8b644)), closes [#646](https://github.com/anncwb/vue-vben-admin/issues/646)
- **table:** updateTableDataRecord support functional rowKey ([448a4c2](https://github.com/anncwb/vue-vben-admin/commit/448a4c2809672480f8f635d7cc4661554112598a))
- **table-action:** add stopButtonPropagation prop ([808012b](https://github.com/anncwb/vue-vben-admin/commit/808012b544b8c6f3cf467f42653c2783dbe8be6b)), closes [#699](https://github.com/anncwb/vue-vben-admin/issues/699)
- **table-img:** support simple show mode and more props ([19d8e01](https://github.com/anncwb/vue-vben-admin/commit/19d8e01e11644c66222f137abd05940cbdec0bb6))
- **test:** add jest test suite ([f6fe1dd](https://github.com/anncwb/vue-vben-admin/commit/f6fe1dd62df231ccbd063db0d32359b48aa5c76b))
- **use-drawer:** add closeDrawer function ([639520a](https://github.com/anncwb/vue-vben-admin/commit/639520ad5ddf829875ab517067abf2b45ebc04c2))
- add CropperAvatar component ([8e410fc](https://github.com/anncwb/vue-vben-admin/commit/8e410fc6401847d8e5545468b5ce6fd7ce9fc5cc))
- **tabs:** add setTabTitle method ([#680](https://github.com/anncwb/vue-vben-admin/issues/680)) ([5ddccf6](https://github.com/anncwb/vue-vben-admin/commit/5ddccf6ba28453b9a35355d53d0db65f1a8876bc))
- **tinymce:** support dark theme and I18n ([83c9cd7](https://github.com/anncwb/vue-vben-admin/commit/83c9cd77421e9c0888a41e2d8dcbca816da67488))
- **Tinymce:** add dynamics to the read-only state of the rich text editor ([#725](https://github.com/anncwb/vue-vben-admin/issues/725)) ([efce482](https://github.com/anncwb/vue-vben-admin/commit/efce482b3215ddf9ed588f63a218d5f76939e947))
- **tree:** add defaultExpandLevel prop ([6edca1c](https://github.com/anncwb/vue-vben-admin/commit/6edca1c19c3b0772f9ab82a7b09251a74fff2173)), closes [#672](https://github.com/anncwb/vue-vben-admin/issues/672)

### Performance Improvements

- **component:** optimize tree and upload components ([3f6920f](https://github.com/anncwb/vue-vben-admin/commit/3f6920f7a9775fc06a34dead90b1724b23b7759c))
- **cropper-avatar:** code optimization ([6dbbdba](https://github.com/anncwb/vue-vben-admin/commit/6dbbdbac76c2c3795e12dd346f6310d1b70f6a7d))
- **i18n:** improve circular dependencies ([d677729](https://github.com/anncwb/vue-vben-admin/commit/d677729acbe2c024ab13cf490b205528507c4823))
- **i18n:** improve warning prompt ([6ef62ba](https://github.com/anncwb/vue-vben-admin/commit/6ef62ba6ea7f5613a1fec982b30fe6b0f478bf59))
- **locale:** reduce the number of multilingual files ([0acc4ab](https://github.com/anncwb/vue-vben-admin/commit/0acc4ab2dd70a239bd13929edede02b283feb7c2))
- **pagewrapper:** 优化 PageWrapper 的高度自适应表现使用 getViewportOffset 替代 useContentViewHeight ([#792](https://github.com/anncwb/vue-vben-admin/issues/792)) ([4d8e398](https://github.com/anncwb/vue-vben-admin/commit/4d8e39857ea59fff99e69832b4a8cabf3a424c24))
- **PageWrapper:** fix the height calculation problem when footer and global footer are opened at the same time ([#760](https://github.com/anncwb/vue-vben-admin/issues/760)) ([ab2c7ef](https://github.com/anncwb/vue-vben-admin/commit/ab2c7efe6994dacfe0ff407783f2c3b246427bfc))
- **utils:** mitt default export is changed from Class to Function ([d3d620f](https://github.com/anncwb/vue-vben-admin/commit/d3d620f4fc75dd69270e4d090a71d426701272ef))
- add createImgPreview func ([#713](https://github.com/anncwb/vue-vben-admin/issues/713)) ([b7c7c46](https://github.com/anncwb/vue-vben-admin/commit/b7c7c46853d332641d116d818e657447884784f3))
- optimize components and add comments ([55e9d9f](https://github.com/anncwb/vue-vben-admin/commit/55e9d9fc2953643cec95c74b6ed34b0e68641fb6))

### Reverts

- **axios:** remove baseUrl config ([61d4efd](https://github.com/anncwb/vue-vben-admin/commit/61d4efd55a8b4f09990b5f1888e23ead43958164))

## [2.5.1](https://github.com/anncwb/vue-vben-admin/compare/v2.4.0...v2.5.1) (2021-06-26)

### Bug Fixes

- fix antdv console warning ([480cfb9](https://github.com/anncwb/vue-vben-admin/commit/480cfb914e78c06eb7784e33465ed91b7d4c3eee))
- fix defHttp baseUrl work ([d5f9919](https://github.com/anncwb/vue-vben-admin/commit/d5f9919b60fdd7d5c435129e8db519c0bbd37529))
- **api:** select api type error ([b387681](https://github.com/anncwb/vue-vben-admin/commit/b387681c00ac018f5bc6a9251009ddffe37acae6))
- **api-select:** ensure that the onchange function parameters are correct ([fa64fc8](https://github.com/anncwb/vue-vben-admin/commit/fa64fc8a622832b87fdf672965d55d543b5929a2))
- **api-select:** loss option data on event callback ([c5f2577](https://github.com/anncwb/vue-vben-admin/commit/c5f2577f515e7ae96b27b509e5dd4b3317fcb7b4)), closes [#733](https://github.com/anncwb/vue-vben-admin/issues/733)
- **ApiSelect demo:** add demo about ApiSelect's use ([#757](https://github.com/anncwb/vue-vben-admin/issues/757)) ([a03d3cc](https://github.com/anncwb/vue-vben-admin/commit/a03d3cc60c770eba644c1f3837850a2c1c015029))
- **avatar:** mock data and Account center style ([2066f66](https://github.com/anncwb/vue-vben-admin/commit/2066f669715491f3e91ac6d0e905cd2b3e80b58d))
- **axios:** make sure that the parameter is an object before processing, fix [#660](https://github.com/anncwb/vue-vben-admin/issues/660) ([834fa7e](https://github.com/anncwb/vue-vben-admin/commit/834fa7eb9c8aff252e083d38fdab4f6f53b4d43a))
- **axios:** transformRequestHook logic error ([b69dcd7](https://github.com/anncwb/vue-vben-admin/commit/b69dcd79d742fd171302ce0f48c7750d60da217f))
- **code-editor:** fix CodeEditor style problem, fix [#655](https://github.com/anncwb/vue-vben-admin/issues/655) ([5662804](https://github.com/anncwb/vue-vben-admin/commit/566280422de0537c4e31496eaaa95a9d51fe9458))
- **codeeditor:** empty value set failed.fixed:[#659](https://github.com/anncwb/vue-vben-admin/issues/659) ([ba2bebb](https://github.com/anncwb/vue-vben-admin/commit/ba2bebb4069085817a90d065ed5877fdb50a8039))
- **codeMirror:** fix the JsonEditor embedded in the bullet frame causing the style to be disordered ([#668](https://github.com/anncwb/vue-vben-admin/issues/668)) ([e1123a2](https://github.com/anncwb/vue-vben-admin/commit/e1123a2ccb5d5450a5072c19e5508a5dc0f14423))
- **demo:** `breadcrumb` route invalid redirect ([84d9300](https://github.com/anncwb/vue-vben-admin/commit/84d9300e52fa73da575591aa4b71858a7e459c8c))
- **demo:** account list page validate and save ([21f7a85](https://github.com/anncwb/vue-vben-admin/commit/21f7a854fe2455315287d04e895661ff739bce17))
- **demo:** fix basic form page style ([8b6e07b](https://github.com/anncwb/vue-vben-admin/commit/8b6e07b768f110f13b4f2efa6c46e03266667a8c))
- **demo:** make sure the map https resource is correct ([7b9cd09](https://github.com/anncwb/vue-vben-admin/commit/7b9cd09ad8a50c45b2e661e07953d786d82f367d))
- **demo:** style error,fix [#806](https://github.com/anncwb/vue-vben-admin/issues/806) ([a2d8be3](https://github.com/anncwb/vue-vben-admin/commit/a2d8be3ab29da88126f3ba971f6893cb12327759))
- **demo-form:** add fieldMapToTime example,fix [#807](https://github.com/anncwb/vue-vben-admin/issues/807) ([a2a75a0](https://github.com/anncwb/vue-vben-admin/commit/a2a75a097ff6c9df12471eff0d62d44d2b88cfff))
- **design:** correct tailwind configuration,fix [#800](https://github.com/anncwb/vue-vben-admin/issues/800) ([aec230c](https://github.com/anncwb/vue-vben-admin/commit/aec230ca19d541079b64c54ba00596ef9cd92ca0))
- **dropdown:** icon and trigger work unexpected ([60b80c9](https://github.com/anncwb/vue-vben-admin/commit/60b80c96e82da9101d56b2e195e9e7571de11f0a)), closes [#796](https://github.com/anncwb/vue-vben-admin/issues/796) [#787](https://github.com/anncwb/vue-vben-admin/issues/787)
- **flow-chart:** fix drag and drop menu loss ([fa828fd](https://github.com/anncwb/vue-vben-admin/commit/fa828fd972efeea87f364be76a1139ae53ec20d8))
- **form:** fix form update problem ([bcad95d](https://github.com/anncwb/vue-vben-admin/commit/bcad95d32a08a73f84ecbabab409cd64159f4077)), closes [#720](https://github.com/anncwb/vue-vben-admin/issues/720)
- **form:** loss args on component change event ([513823b](https://github.com/anncwb/vue-vben-admin/commit/513823bfbd3e8acc68098e0708c34bff2dd8dba6))
- **form:** radioButtonGroup value support boolean ([9e2aa20](https://github.com/anncwb/vue-vben-admin/commit/9e2aa20daa08d2902cb5d56c1560306947e44939))
- **form:** radioButtonGroup value support number ([bbddf30](https://github.com/anncwb/vue-vben-admin/commit/bbddf30e96feb1ab048323d93d3b8c1b18857acd))
- **form:** schemas update problem ([808328d](https://github.com/anncwb/vue-vben-admin/commit/808328dc7e56b1cc07b678d501d9589290173443)), closes [#688](https://github.com/anncwb/vue-vben-admin/issues/688)
- **keep-alive:** tablist cache updating effect ([d62d0ca](https://github.com/anncwb/vue-vben-admin/commit/d62d0ca08cff442c23eb9265851b066a2f24afa8)), closes [#695](https://github.com/anncwb/vue-vben-admin/issues/695)
- **layout:** fix class loss ([d018363](https://github.com/anncwb/vue-vben-admin/commit/d018363ddcd68189a18829a2b2560f3b98da58a6))
- **layout:** fix style compatibility issues ([905e5b7](https://github.com/anncwb/vue-vben-admin/commit/905e5b714b582548f32feca723012124343686a6))
- **layout:** props warn ([#756](https://github.com/anncwb/vue-vben-admin/issues/756)) ([bbce002](https://github.com/anncwb/vue-vben-admin/commit/bbce002be170c52db984647c931db88d7724cb52))
- **lock:** fix lock modal height ([40e3cb0](https://github.com/anncwb/vue-vben-admin/commit/40e3cb043c90a8343fa44a32acad2cb77de732da)), closes [#701](https://github.com/anncwb/vue-vben-admin/issues/701)
- **log:** fix Wrong version number ([#653](https://github.com/anncwb/vue-vben-admin/issues/653)) ([4f0d45f](https://github.com/anncwb/vue-vben-admin/commit/4f0d45f1df48755eadc0b09fa19762ee68f9abd1))
- **login:** login page modal style fixed: [#662](https://github.com/anncwb/vue-vben-admin/issues/662) ([#666](https://github.com/anncwb/vue-vben-admin/issues/666)) ([b218f10](https://github.com/anncwb/vue-vben-admin/commit/b218f10e25a9364c399a5fe42eedb549f57c01ea))
- **menu:** fix the jitter problem of menu folding animation,fix [#732](https://github.com/anncwb/vue-vben-admin/issues/732) ([4c89ea7](https://github.com/anncwb/vue-vben-admin/commit/4c89ea7474f4315870df1790f99f3e431f343b90))
- **mock:** make sure ignore matches the file correctly, fix [#745](https://github.com/anncwb/vue-vben-admin/issues/745) ([a222ec8](https://github.com/anncwb/vue-vben-admin/commit/a222ec8553f9b4477a43a8f7d113b5646fbfc373))
- **mock:** menu list api loss `type` field ([4185412](https://github.com/anncwb/vue-vben-admin/commit/41854121f3713dbde236afd3a416e9f27bd0c673))
- **mock:** type error ([7c1ffa3](https://github.com/anncwb/vue-vben-admin/commit/7c1ffa3d23de508a8d1590985806cb7a484b24e5))
- **modal:** add v-model support for visible ([de12bab](https://github.com/anncwb/vue-vben-admin/commit/de12babd314ac831d3cb645f42dbf8a476075623))
- **modal:** ensure that the full screen height is calculated correctly ([1c1755c](https://github.com/anncwb/vue-vben-admin/commit/1c1755cf5b4ada7263c05ddf4105abb52a2abb2f))
- **modal:** ensure that the shutdown event is not triggered multiple times ([655b743](https://github.com/anncwb/vue-vben-admin/commit/655b74323653147943cbde2352208cb765c82b8a))
- **modal:** redoModalHeight not work as expected ([5d554f1](https://github.com/anncwb/vue-vben-admin/commit/5d554f184f7b61774d1a1b2e61451677b38505de))
- **page:** `basic form` action btns should be in line ([6c4f947](https://github.com/anncwb/vue-vben-admin/commit/6c4f947386c181f45253c94e4ef735d29a253053))
- **pop-confirm:** fix event working unexpected ([a6ef771](https://github.com/anncwb/vue-vben-admin/commit/a6ef771fcce14c3644c965afaa69b3a17d0a7087))
- **radio-button:** fix RadioButton `disabled` support ([ee384b1](https://github.com/anncwb/vue-vben-admin/commit/ee384b1fa7e387b3680e9d54cbe4a1e2f15ec750)), closes [#710](https://github.com/anncwb/vue-vben-admin/issues/710)
- **route:** dynamically introduce components error ([c6b766d](https://github.com/anncwb/vue-vben-admin/commit/c6b766d8ea902294ab1f7e4a06781f2bcfdd1f0b))
- **router:** loss `directory` route ([df8cd86](https://github.com/anncwb/vue-vben-admin/commit/df8cd860514f32f44847dcf724f0737ed4d8b9e0)), closes [#722](https://github.com/anncwb/vue-vben-admin/issues/722)
- **store:** fix type error after pinia version upgrade ([e8d6f88](https://github.com/anncwb/vue-vben-admin/commit/e8d6f8851efd7076946486864936f1797280d3ba))
- **table:** wrong indeterminate state ([495b1da](https://github.com/anncwb/vue-vben-admin/commit/495b1da385e9b6428d2b994669d2065722445923))
- **table:** event editCancel loss params ([8d22231](https://github.com/anncwb/vue-vben-admin/commit/8d22231a5fa4afed19201a4a4e5c29d674498516))
- **table:** fix table jitter problem ([8eba7fb](https://github.com/anncwb/vue-vben-admin/commit/8eba7fb52786d1977e4cb7b67673d74c91c5c827))
- **table:** getDataSource not worked on empty data ([e78af6f](https://github.com/anncwb/vue-vben-admin/commit/e78af6f228e25f052dc4c5a1859a6db50e0b112e)), closes [#752](https://github.com/anncwb/vue-vben-admin/issues/752)
- **table:** make sure the table width is correct, fix [#593](https://github.com/anncwb/vue-vben-admin/issues/593) ([d73d43e](https://github.com/anncwb/vue-vben-admin/commit/d73d43ed91f30957cfd202c51552ca40a19cef08))
- **table:** settings indeterminate state effect ([4fd2051](https://github.com/anncwb/vue-vben-admin/commit/4fd2051bc0403bfc5345ed6a5fc283a372ef7a92))
- **table:** support change event ([9f4d171](https://github.com/anncwb/vue-vben-admin/commit/9f4d1719caa76de94e6362c16e4df3ac28df253c)), closes [#677](https://github.com/anncwb/vue-vben-admin/issues/677)
- **table:** treeTable editable error ([4ae39c5](https://github.com/anncwb/vue-vben-admin/commit/4ae39c53b49532fc6c31086a31e30429d2e236ed)), closes [#811](https://github.com/anncwb/vue-vben-admin/issues/811)
- **table:** try to get close to the form stuck ([d81481c](https://github.com/anncwb/vue-vben-admin/commit/d81481c52186145dac130aaa1594f0ba8db4d392))
- **table:** useTable support onChange ([9f5085c](https://github.com/anncwb/vue-vben-admin/commit/9f5085c9f9f46b09391156b17091c1771bc13026))
- **table-action:** fix the split line style is missing,fix [#674](https://github.com/anncwb/vue-vben-admin/issues/674) ([b1cb863](https://github.com/anncwb/vue-vben-admin/commit/b1cb86350253dc5be095466966d9469775f4395d))
- **Tinymce:** Read only status upload button can also be used ([#718](https://github.com/anncwb/vue-vben-admin/issues/718)) ([966571b](https://github.com/anncwb/vue-vben-admin/commit/966571bdcb11c2729ab9ce212bd3e195f7bf3a59))
- **upload:** ensure preview items valid ([4376928](https://github.com/anncwb/vue-vben-admin/commit/437692869a232ee65c300c65ee473557ae0913c7))
- **upload:** make sure to carry custom parameters, fix [#802](https://github.com/anncwb/vue-vben-admin/issues/802) ([c4b22a2](https://github.com/anncwb/vue-vben-admin/commit/c4b22a225d0088d87be0c0068f543366312521db))
- **use-message:** `content` not support vNode ([154ebc3](https://github.com/anncwb/vue-vben-admin/commit/154ebc3d96f73bb3ceab99ea0229a3619d585aba))
- build error ([5212ea7](https://github.com/anncwb/vue-vben-admin/commit/5212ea79b43c832a5136354b549de8f89b6e2156))
- ensure that roleList is not empty ([aebad61](https://github.com/anncwb/vue-vben-admin/commit/aebad61b3d3e11aaf720b37e762e53e2e6999d3c))
- fix darkModeSwitch switch failure ([34a8054](https://github.com/anncwb/vue-vben-admin/commit/34a80542de670f0385dffaf5bf64bb9c3f6b90da))
- fix if getDropdownList.length==0 show Dropdown component ([21c771b](https://github.com/anncwb/vue-vben-admin/commit/21c771b59cb45defbff37de21c5c1950370b8f92))
- fix Login Page LocalePicker showLocale condition ([d683b0f](https://github.com/anncwb/vue-vben-admin/commit/d683b0f1e85b85b07090feba4ac7f741bd3bd482))
- fix node12 version data mock error ([644dbe3](https://github.com/anncwb/vue-vben-admin/commit/644dbe315bb03ea1641a682359873237208a5303))
- Fix the problem that the `lang` attribute of `HTML` will not be set when it is first loaded ([#682](https://github.com/anncwb/vue-vben-admin/issues/682)) ([eca8907](https://github.com/anncwb/vue-vben-admin/commit/eca8907a11c28d816c3da5a0667f45a38a499012))
- login failed ([035f55a](https://github.com/anncwb/vue-vben-admin/commit/035f55af9778819d72adc1700d9de56a6569b58f))
- session timeout login logic error ([#678](https://github.com/anncwb/vue-vben-admin/issues/678)) ([132c7fb](https://github.com/anncwb/vue-vben-admin/commit/132c7fb944df255c4d76a25d6d924439f91f9c54)), closes [#673](https://github.com/anncwb/vue-vben-admin/issues/673)
- **tree:** support defaultExpandAll prop ([3ed2339](https://github.com/anncwb/vue-vben-admin/commit/3ed2339a6d75abbd6ccf723b6eaa762f9921409e))
- **useViewHeight:** Fix the problem that useContentViewHeight does not calculate the footer ([#747](https://github.com/anncwb/vue-vben-admin/issues/747)) ([33cd8fe](https://github.com/anncwb/vue-vben-admin/commit/33cd8fe6533830176ab63ddfc4d74f75a384366c))
- theme switching fails ([7e2ca79](https://github.com/anncwb/vue-vben-admin/commit/7e2ca79ece2f5209cb7ce4b0f5ee15012f9f51de))

### Features

- **demo:** add route multi tabs show ([0e414ba](https://github.com/anncwb/vue-vben-admin/commit/0e414ba3c10b4e47a85feb1a38cae66c815719d8)), closes [#817](https://github.com/anncwb/vue-vben-admin/issues/817)
- add Tree LoadData demo ([9298b3c](https://github.com/anncwb/vue-vben-admin/commit/9298b3c988c10b81d83430ca31b9ce1d98a3fad9))
- optimize error message for api failure ([ea6834a](https://github.com/anncwb/vue-vben-admin/commit/ea6834aeec3ef56d411b2c10a474f75d3d7bfdfc))
- **api-select:** auto refetch after params changed ([50207ad](https://github.com/anncwb/vue-vben-admin/commit/50207ad702ef3faca1e27c873c89132ab92fae8e))
- **app-search:** auto focus on show ([1ae6362](https://github.com/anncwb/vue-vben-admin/commit/1ae636296df2cf99e8a777f053c539c50e6ad49a))
- **axios:** added authenticationScheme configuration,fix [#774](https://github.com/anncwb/vue-vben-admin/issues/774) ([b6d5b07](https://github.com/anncwb/vue-vben-admin/commit/b6d5b0796de4d0b66c0f33c335ec991d44f64ef2))
- **demo:** `switch` use in table ([46899aa](https://github.com/anncwb/vue-vben-admin/commit/46899aa3cd6b1616c42ac263a28af75be839f6a0))
- **demo:** added guide page example ([d196340](https://github.com/anncwb/vue-vben-admin/commit/d196340d270d2becbf2cc81b7d4f09273381bd09))
- **echarts:** add getInstance for useECharts ([fb6c76d](https://github.com/anncwb/vue-vben-admin/commit/fb6c76db535bd0c6305d03c0cff876a1f079100b))
- **modal:** add closeModal for useModal ([6d5f9aa](https://github.com/anncwb/vue-vben-admin/commit/6d5f9aa699c5da8af6bf5841baddc4a8bd603917))
- **modal:** add redoModalHeight for useModalInner ([f732b56](https://github.com/anncwb/vue-vben-admin/commit/f732b569042f7fe77c85cb295538ddd85561f7e9))
- **preview:** added createImgPreview picture preview function ([305630e](https://github.com/anncwb/vue-vben-admin/commit/305630e3fd886b3f690f890a934a8a6ba224fba1))
- **project-setting:** added sessionTimeoutProcessing project configuration item,fix [#772](https://github.com/anncwb/vue-vben-admin/issues/772) ([0d07084](https://github.com/anncwb/vue-vben-admin/commit/0d0708409c4adbe7a0c5e33abf5307031147eaeb))
- **table:** add editable DatePicker & TimePicker ([#654](https://github.com/anncwb/vue-vben-admin/issues/654)) ([93006c7](https://github.com/anncwb/vue-vben-admin/commit/93006c7dc7b5243b26637f444c8057c95935e622))
- **table:** add updateTableDataRecord method ([8e4f486](https://github.com/anncwb/vue-vben-admin/commit/8e4f486fcf835f0b6f2a95676dba268ffdd0566e))
- **table:** editable component text align ([8eaf575](https://github.com/anncwb/vue-vben-admin/commit/8eaf57562610a833c8083ae9957f458319d1cc93))
- **table:** support columns-change event ([125a7d1](https://github.com/anncwb/vue-vben-admin/commit/125a7d14831642c9cbb2e4b3e75953c3b2e2cdef))
- **table:** support custom update on row editing ([fe2bcfc](https://github.com/anncwb/vue-vben-admin/commit/fe2bcfc6f74159c355f3be153a316869fdb8b644)), closes [#646](https://github.com/anncwb/vue-vben-admin/issues/646)
- **table:** updateTableDataRecord support functional rowKey ([448a4c2](https://github.com/anncwb/vue-vben-admin/commit/448a4c2809672480f8f635d7cc4661554112598a))
- **table-action:** add stopButtonPropagation prop ([808012b](https://github.com/anncwb/vue-vben-admin/commit/808012b544b8c6f3cf467f42653c2783dbe8be6b)), closes [#699](https://github.com/anncwb/vue-vben-admin/issues/699)
- **table-img:** support simple show mode and more props ([19d8e01](https://github.com/anncwb/vue-vben-admin/commit/19d8e01e11644c66222f137abd05940cbdec0bb6))
- **test:** add jest test suite ([f6fe1dd](https://github.com/anncwb/vue-vben-admin/commit/f6fe1dd62df231ccbd063db0d32359b48aa5c76b))
- **use-drawer:** add closeDrawer function ([639520a](https://github.com/anncwb/vue-vben-admin/commit/639520ad5ddf829875ab517067abf2b45ebc04c2))
- add CropperAvatar component ([8e410fc](https://github.com/anncwb/vue-vben-admin/commit/8e410fc6401847d8e5545468b5ce6fd7ce9fc5cc))
- **tabs:** add setTabTitle method ([#680](https://github.com/anncwb/vue-vben-admin/issues/680)) ([5ddccf6](https://github.com/anncwb/vue-vben-admin/commit/5ddccf6ba28453b9a35355d53d0db65f1a8876bc))
- **tinymce:** support dark theme and I18n ([83c9cd7](https://github.com/anncwb/vue-vben-admin/commit/83c9cd77421e9c0888a41e2d8dcbca816da67488))
- **Tinymce:** add dynamics to the read-only state of the rich text editor ([#725](https://github.com/anncwb/vue-vben-admin/issues/725)) ([efce482](https://github.com/anncwb/vue-vben-admin/commit/efce482b3215ddf9ed588f63a218d5f76939e947))
- **tree:** add defaultExpandLevel prop ([6edca1c](https://github.com/anncwb/vue-vben-admin/commit/6edca1c19c3b0772f9ab82a7b09251a74fff2173)), closes [#672](https://github.com/anncwb/vue-vben-admin/issues/672)

### Performance Improvements

- **component:** optimize tree and upload components ([3f6920f](https://github.com/anncwb/vue-vben-admin/commit/3f6920f7a9775fc06a34dead90b1724b23b7759c))
- **cropper-avatar:** code optimization ([6dbbdba](https://github.com/anncwb/vue-vben-admin/commit/6dbbdbac76c2c3795e12dd346f6310d1b70f6a7d))
- **i18n:** improve circular dependencies ([d677729](https://github.com/anncwb/vue-vben-admin/commit/d677729acbe2c024ab13cf490b205528507c4823))
- **i18n:** improve warning prompt ([6ef62ba](https://github.com/anncwb/vue-vben-admin/commit/6ef62ba6ea7f5613a1fec982b30fe6b0f478bf59))
- **locale:** reduce the number of multilingual files ([0acc4ab](https://github.com/anncwb/vue-vben-admin/commit/0acc4ab2dd70a239bd13929edede02b283feb7c2))
- **pagewrapper:** 优化 PageWrapper 的高度自适应表现使用 getViewportOffset 替代 useContentViewHeight ([#792](https://github.com/anncwb/vue-vben-admin/issues/792)) ([4d8e398](https://github.com/anncwb/vue-vben-admin/commit/4d8e39857ea59fff99e69832b4a8cabf3a424c24))
- **PageWrapper:** fix the height calculation problem when footer and global footer are opened at the same time ([#760](https://github.com/anncwb/vue-vben-admin/issues/760)) ([ab2c7ef](https://github.com/anncwb/vue-vben-admin/commit/ab2c7efe6994dacfe0ff407783f2c3b246427bfc))
- **utils:** mitt default export is changed from Class to Function ([d3d620f](https://github.com/anncwb/vue-vben-admin/commit/d3d620f4fc75dd69270e4d090a71d426701272ef))
- add createImgPreview func ([#713](https://github.com/anncwb/vue-vben-admin/issues/713)) ([b7c7c46](https://github.com/anncwb/vue-vben-admin/commit/b7c7c46853d332641d116d818e657447884784f3))
- optimize components and add comments ([55e9d9f](https://github.com/anncwb/vue-vben-admin/commit/55e9d9fc2953643cec95c74b6ed34b0e68641fb6))

### Reverts

- **axios:** remove baseUrl config ([61d4efd](https://github.com/anncwb/vue-vben-admin/commit/61d4efd55a8b4f09990b5f1888e23ead43958164))

# [2.5.0](https://github.com/anncwb/vue-vben-admin/compare/v2.4.0...v2.5.0) (2021-06-20)

### Bug Fixes

- **api:** select api type error ([b387681](https://github.com/anncwb/vue-vben-admin/commit/b387681c00ac018f5bc6a9251009ddffe37acae6))
- **api-select:** loss option data on event callback ([c5f2577](https://github.com/anncwb/vue-vben-admin/commit/c5f2577f515e7ae96b27b509e5dd4b3317fcb7b4)), closes [#733](https://github.com/anncwb/vue-vben-admin/issues/733)
- **ApiSelect demo:** add demo about ApiSelect's use ([#757](https://github.com/anncwb/vue-vben-admin/issues/757)) ([a03d3cc](https://github.com/anncwb/vue-vben-admin/commit/a03d3cc60c770eba644c1f3837850a2c1c015029))
- **avatar:** mock data and Account center style ([2066f66](https://github.com/anncwb/vue-vben-admin/commit/2066f669715491f3e91ac6d0e905cd2b3e80b58d))
- **axios:** make sure that the parameter is an object before processing, fix [#660](https://github.com/anncwb/vue-vben-admin/issues/660) ([834fa7e](https://github.com/anncwb/vue-vben-admin/commit/834fa7eb9c8aff252e083d38fdab4f6f53b4d43a))
- **axios:** transformRequestHook logic error ([b69dcd7](https://github.com/anncwb/vue-vben-admin/commit/b69dcd79d742fd171302ce0f48c7750d60da217f))
- **code-editor:** fix CodeEditor style problem, fix [#655](https://github.com/anncwb/vue-vben-admin/issues/655) ([5662804](https://github.com/anncwb/vue-vben-admin/commit/566280422de0537c4e31496eaaa95a9d51fe9458))
- **codeeditor:** empty value set failed.fixed:[#659](https://github.com/anncwb/vue-vben-admin/issues/659) ([ba2bebb](https://github.com/anncwb/vue-vben-admin/commit/ba2bebb4069085817a90d065ed5877fdb50a8039))
- **codeMirror:** fix the JsonEditor embedded in the bullet frame causing the style to be disordered ([#668](https://github.com/anncwb/vue-vben-admin/issues/668)) ([e1123a2](https://github.com/anncwb/vue-vben-admin/commit/e1123a2ccb5d5450a5072c19e5508a5dc0f14423))
- **demo:** `breadcrumb` route invalid redirect ([84d9300](https://github.com/anncwb/vue-vben-admin/commit/84d9300e52fa73da575591aa4b71858a7e459c8c))
- **demo:** account list page validate and save ([21f7a85](https://github.com/anncwb/vue-vben-admin/commit/21f7a854fe2455315287d04e895661ff739bce17))
- **demo:** fix basic form page style ([8b6e07b](https://github.com/anncwb/vue-vben-admin/commit/8b6e07b768f110f13b4f2efa6c46e03266667a8c))
- **demo:** make sure the map https resource is correct ([7b9cd09](https://github.com/anncwb/vue-vben-admin/commit/7b9cd09ad8a50c45b2e661e07953d786d82f367d))
- **flow-chart:** fix drag and drop menu loss ([fa828fd](https://github.com/anncwb/vue-vben-admin/commit/fa828fd972efeea87f364be76a1139ae53ec20d8))
- **form:** fix form update problem ([bcad95d](https://github.com/anncwb/vue-vben-admin/commit/bcad95d32a08a73f84ecbabab409cd64159f4077)), closes [#720](https://github.com/anncwb/vue-vben-admin/issues/720)
- **form:** loss args on component change event ([513823b](https://github.com/anncwb/vue-vben-admin/commit/513823bfbd3e8acc68098e0708c34bff2dd8dba6))
- **form:** radioButtonGroup value support boolean ([9e2aa20](https://github.com/anncwb/vue-vben-admin/commit/9e2aa20daa08d2902cb5d56c1560306947e44939))
- **form:** radioButtonGroup value support number ([bbddf30](https://github.com/anncwb/vue-vben-admin/commit/bbddf30e96feb1ab048323d93d3b8c1b18857acd))
- **form:** schemas update problem ([808328d](https://github.com/anncwb/vue-vben-admin/commit/808328dc7e56b1cc07b678d501d9589290173443)), closes [#688](https://github.com/anncwb/vue-vben-admin/issues/688)
- **keep-alive:** tablist cache updating effect ([d62d0ca](https://github.com/anncwb/vue-vben-admin/commit/d62d0ca08cff442c23eb9265851b066a2f24afa8)), closes [#695](https://github.com/anncwb/vue-vben-admin/issues/695)
- **layout:** fix class loss ([d018363](https://github.com/anncwb/vue-vben-admin/commit/d018363ddcd68189a18829a2b2560f3b98da58a6))
- **layout:** fix style compatibility issues ([905e5b7](https://github.com/anncwb/vue-vben-admin/commit/905e5b714b582548f32feca723012124343686a6))
- **layout:** props warn ([#756](https://github.com/anncwb/vue-vben-admin/issues/756)) ([bbce002](https://github.com/anncwb/vue-vben-admin/commit/bbce002be170c52db984647c931db88d7724cb52))
- **lock:** fix lock modal height ([40e3cb0](https://github.com/anncwb/vue-vben-admin/commit/40e3cb043c90a8343fa44a32acad2cb77de732da)), closes [#701](https://github.com/anncwb/vue-vben-admin/issues/701)
- **log:** fix Wrong version number ([#653](https://github.com/anncwb/vue-vben-admin/issues/653)) ([4f0d45f](https://github.com/anncwb/vue-vben-admin/commit/4f0d45f1df48755eadc0b09fa19762ee68f9abd1))
- **login:** login page modal style fixed: [#662](https://github.com/anncwb/vue-vben-admin/issues/662) ([#666](https://github.com/anncwb/vue-vben-admin/issues/666)) ([b218f10](https://github.com/anncwb/vue-vben-admin/commit/b218f10e25a9364c399a5fe42eedb549f57c01ea))
- **menu:** fix the jitter problem of menu folding animation,fix [#732](https://github.com/anncwb/vue-vben-admin/issues/732) ([4c89ea7](https://github.com/anncwb/vue-vben-admin/commit/4c89ea7474f4315870df1790f99f3e431f343b90))
- **mock:** make sure ignore matches the file correctly, fix [#745](https://github.com/anncwb/vue-vben-admin/issues/745) ([a222ec8](https://github.com/anncwb/vue-vben-admin/commit/a222ec8553f9b4477a43a8f7d113b5646fbfc373))
- **mock:** menu list api loss `type` field ([4185412](https://github.com/anncwb/vue-vben-admin/commit/41854121f3713dbde236afd3a416e9f27bd0c673))
- **mock:** type error ([7c1ffa3](https://github.com/anncwb/vue-vben-admin/commit/7c1ffa3d23de508a8d1590985806cb7a484b24e5))
- **modal:** add v-model support for visible ([de12bab](https://github.com/anncwb/vue-vben-admin/commit/de12babd314ac831d3cb645f42dbf8a476075623))
- **modal:** ensure that the full screen height is calculated correctly ([1c1755c](https://github.com/anncwb/vue-vben-admin/commit/1c1755cf5b4ada7263c05ddf4105abb52a2abb2f))
- **modal:** ensure that the shutdown event is not triggered multiple times ([655b743](https://github.com/anncwb/vue-vben-admin/commit/655b74323653147943cbde2352208cb765c82b8a))
- **store:** fix type error after pinia version upgrade ([e8d6f88](https://github.com/anncwb/vue-vben-admin/commit/e8d6f8851efd7076946486864936f1797280d3ba))
- **use-message:** `content` not support vNode ([154ebc3](https://github.com/anncwb/vue-vben-admin/commit/154ebc3d96f73bb3ceab99ea0229a3619d585aba))
- build error ([5212ea7](https://github.com/anncwb/vue-vben-admin/commit/5212ea79b43c832a5136354b549de8f89b6e2156))
- fix darkModeSwitch switch failure ([34a8054](https://github.com/anncwb/vue-vben-admin/commit/34a80542de670f0385dffaf5bf64bb9c3f6b90da))
- fix if getDropdownList.length==0 show Dropdown component ([21c771b](https://github.com/anncwb/vue-vben-admin/commit/21c771b59cb45defbff37de21c5c1950370b8f92))
- fix Login Page LocalePicker showLocale condition ([d683b0f](https://github.com/anncwb/vue-vben-admin/commit/d683b0f1e85b85b07090feba4ac7f741bd3bd482))
- **modal:** redoModalHeight not work as expected ([5d554f1](https://github.com/anncwb/vue-vben-admin/commit/5d554f184f7b61774d1a1b2e61451677b38505de))
- **page:** `basic form` action btns should be in line ([6c4f947](https://github.com/anncwb/vue-vben-admin/commit/6c4f947386c181f45253c94e4ef735d29a253053))
- **radio-button:** fix RadioButton `disabled` support ([ee384b1](https://github.com/anncwb/vue-vben-admin/commit/ee384b1fa7e387b3680e9d54cbe4a1e2f15ec750)), closes [#710](https://github.com/anncwb/vue-vben-admin/issues/710)
- **route:** dynamically introduce components error ([c6b766d](https://github.com/anncwb/vue-vben-admin/commit/c6b766d8ea902294ab1f7e4a06781f2bcfdd1f0b))
- **router:** loss `directory` route ([df8cd86](https://github.com/anncwb/vue-vben-admin/commit/df8cd860514f32f44847dcf724f0737ed4d8b9e0)), closes [#722](https://github.com/anncwb/vue-vben-admin/issues/722)
- **table:** wrong indeterminate state ([495b1da](https://github.com/anncwb/vue-vben-admin/commit/495b1da385e9b6428d2b994669d2065722445923))
- **table:** make sure the table width is correct, fix [#593](https://github.com/anncwb/vue-vben-admin/issues/593) ([d73d43e](https://github.com/anncwb/vue-vben-admin/commit/d73d43ed91f30957cfd202c51552ca40a19cef08))
- **table:** settings indeterminate state effect ([4fd2051](https://github.com/anncwb/vue-vben-admin/commit/4fd2051bc0403bfc5345ed6a5fc283a372ef7a92))
- **table:** support change event ([9f4d171](https://github.com/anncwb/vue-vben-admin/commit/9f4d1719caa76de94e6362c16e4df3ac28df253c)), closes [#677](https://github.com/anncwb/vue-vben-admin/issues/677)
- **table:** try to get close to the form stuck ([d81481c](https://github.com/anncwb/vue-vben-admin/commit/d81481c52186145dac130aaa1594f0ba8db4d392))
- **table:** useTable support onChange ([9f5085c](https://github.com/anncwb/vue-vben-admin/commit/9f5085c9f9f46b09391156b17091c1771bc13026))
- **table-action:** fix the split line style is missing,fix [#674](https://github.com/anncwb/vue-vben-admin/issues/674) ([b1cb863](https://github.com/anncwb/vue-vben-admin/commit/b1cb86350253dc5be095466966d9469775f4395d))
- **Tinymce:** Read only status upload button can also be used ([#718](https://github.com/anncwb/vue-vben-admin/issues/718)) ([966571b](https://github.com/anncwb/vue-vben-admin/commit/966571bdcb11c2729ab9ce212bd3e195f7bf3a59))
- **tree:** support defaultExpandAll prop ([3ed2339](https://github.com/anncwb/vue-vben-admin/commit/3ed2339a6d75abbd6ccf723b6eaa762f9921409e))
- **upload:** ensure preview items valid ([4376928](https://github.com/anncwb/vue-vben-admin/commit/437692869a232ee65c300c65ee473557ae0913c7))
- **useViewHeight:** Fix the problem that useContentViewHeight does not calculate the footer ([#747](https://github.com/anncwb/vue-vben-admin/issues/747)) ([33cd8fe](https://github.com/anncwb/vue-vben-admin/commit/33cd8fe6533830176ab63ddfc4d74f75a384366c))
- ensure that roleList is not empty ([aebad61](https://github.com/anncwb/vue-vben-admin/commit/aebad61b3d3e11aaf720b37e762e53e2e6999d3c))
- fix node12 version data mock error ([644dbe3](https://github.com/anncwb/vue-vben-admin/commit/644dbe315bb03ea1641a682359873237208a5303))
- Fix the problem that the `lang` attribute of `HTML` will not be set when it is first loaded ([#682](https://github.com/anncwb/vue-vben-admin/issues/682)) ([eca8907](https://github.com/anncwb/vue-vben-admin/commit/eca8907a11c28d816c3da5a0667f45a38a499012))
- login failed ([035f55a](https://github.com/anncwb/vue-vben-admin/commit/035f55af9778819d72adc1700d9de56a6569b58f))
- session timeout login logic error ([#678](https://github.com/anncwb/vue-vben-admin/issues/678)) ([132c7fb](https://github.com/anncwb/vue-vben-admin/commit/132c7fb944df255c4d76a25d6d924439f91f9c54)), closes [#673](https://github.com/anncwb/vue-vben-admin/issues/673)
- theme switching fails ([7e2ca79](https://github.com/anncwb/vue-vben-admin/commit/7e2ca79ece2f5209cb7ce4b0f5ee15012f9f51de))

### Features

- optimize error message for api failure ([ea6834a](https://github.com/anncwb/vue-vben-admin/commit/ea6834aeec3ef56d411b2c10a474f75d3d7bfdfc))
- **api-select:** auto refetch after params changed ([50207ad](https://github.com/anncwb/vue-vben-admin/commit/50207ad702ef3faca1e27c873c89132ab92fae8e))
- **app-search:** auto focus on show ([1ae6362](https://github.com/anncwb/vue-vben-admin/commit/1ae636296df2cf99e8a777f053c539c50e6ad49a))
- **axios:** added authenticationScheme configuration,fix [#774](https://github.com/anncwb/vue-vben-admin/issues/774) ([b6d5b07](https://github.com/anncwb/vue-vben-admin/commit/b6d5b0796de4d0b66c0f33c335ec991d44f64ef2))
- **demo:** `switch` use in table ([46899aa](https://github.com/anncwb/vue-vben-admin/commit/46899aa3cd6b1616c42ac263a28af75be839f6a0))
- **demo:** added guide page example ([d196340](https://github.com/anncwb/vue-vben-admin/commit/d196340d270d2becbf2cc81b7d4f09273381bd09))
- **echarts:** add getInstance for useECharts ([fb6c76d](https://github.com/anncwb/vue-vben-admin/commit/fb6c76db535bd0c6305d03c0cff876a1f079100b))
- **modal:** add closeModal for useModal ([6d5f9aa](https://github.com/anncwb/vue-vben-admin/commit/6d5f9aa699c5da8af6bf5841baddc4a8bd603917))
- **modal:** add redoModalHeight for useModalInner ([f732b56](https://github.com/anncwb/vue-vben-admin/commit/f732b569042f7fe77c85cb295538ddd85561f7e9))
- **preview:** added createImgPreview picture preview function ([305630e](https://github.com/anncwb/vue-vben-admin/commit/305630e3fd886b3f690f890a934a8a6ba224fba1))
- **project-setting:** added sessionTimeoutProcessing project configuration item,fix [#772](https://github.com/anncwb/vue-vben-admin/issues/772) ([0d07084](https://github.com/anncwb/vue-vben-admin/commit/0d0708409c4adbe7a0c5e33abf5307031147eaeb))
- **table:** add editable DatePicker & TimePicker ([#654](https://github.com/anncwb/vue-vben-admin/issues/654)) ([93006c7](https://github.com/anncwb/vue-vben-admin/commit/93006c7dc7b5243b26637f444c8057c95935e622))
- **table:** add updateTableDataRecord method ([8e4f486](https://github.com/anncwb/vue-vben-admin/commit/8e4f486fcf835f0b6f2a95676dba268ffdd0566e))
- **table:** editable component text align ([8eaf575](https://github.com/anncwb/vue-vben-admin/commit/8eaf57562610a833c8083ae9957f458319d1cc93))
- **table:** support columns-change event ([125a7d1](https://github.com/anncwb/vue-vben-admin/commit/125a7d14831642c9cbb2e4b3e75953c3b2e2cdef))
- **table:** support custom update on row editing ([fe2bcfc](https://github.com/anncwb/vue-vben-admin/commit/fe2bcfc6f74159c355f3be153a316869fdb8b644)), closes [#646](https://github.com/anncwb/vue-vben-admin/issues/646)
- **table:** updateTableDataRecord support functional rowKey ([448a4c2](https://github.com/anncwb/vue-vben-admin/commit/448a4c2809672480f8f635d7cc4661554112598a))
- **table-action:** add stopButtonPropagation prop ([808012b](https://github.com/anncwb/vue-vben-admin/commit/808012b544b8c6f3cf467f42653c2783dbe8be6b)), closes [#699](https://github.com/anncwb/vue-vben-admin/issues/699)
- **table-img:** support simple show mode and more props ([19d8e01](https://github.com/anncwb/vue-vben-admin/commit/19d8e01e11644c66222f137abd05940cbdec0bb6))
- **test:** add jest test suite ([f6fe1dd](https://github.com/anncwb/vue-vben-admin/commit/f6fe1dd62df231ccbd063db0d32359b48aa5c76b))
- **use-drawer:** add closeDrawer function ([639520a](https://github.com/anncwb/vue-vben-admin/commit/639520ad5ddf829875ab517067abf2b45ebc04c2))
- add CropperAvatar component ([8e410fc](https://github.com/anncwb/vue-vben-admin/commit/8e410fc6401847d8e5545468b5ce6fd7ce9fc5cc))
- **tabs:** add setTabTitle method ([#680](https://github.com/anncwb/vue-vben-admin/issues/680)) ([5ddccf6](https://github.com/anncwb/vue-vben-admin/commit/5ddccf6ba28453b9a35355d53d0db65f1a8876bc))
- **tinymce:** support dark theme and I18n ([83c9cd7](https://github.com/anncwb/vue-vben-admin/commit/83c9cd77421e9c0888a41e2d8dcbca816da67488))
- **Tinymce:** add dynamics to the read-only state of the rich text editor ([#725](https://github.com/anncwb/vue-vben-admin/issues/725)) ([efce482](https://github.com/anncwb/vue-vben-admin/commit/efce482b3215ddf9ed588f63a218d5f76939e947))
- **tree:** add defaultExpandLevel prop ([6edca1c](https://github.com/anncwb/vue-vben-admin/commit/6edca1c19c3b0772f9ab82a7b09251a74fff2173)), closes [#672](https://github.com/anncwb/vue-vben-admin/issues/672)

### Performance Improvements

- **component:** optimize tree and upload components ([3f6920f](https://github.com/anncwb/vue-vben-admin/commit/3f6920f7a9775fc06a34dead90b1724b23b7759c))
- **cropper-avatar:** code optimization ([6dbbdba](https://github.com/anncwb/vue-vben-admin/commit/6dbbdbac76c2c3795e12dd346f6310d1b70f6a7d))
- **i18n:** improve circular dependencies ([d677729](https://github.com/anncwb/vue-vben-admin/commit/d677729acbe2c024ab13cf490b205528507c4823))
- **i18n:** improve warning prompt ([6ef62ba](https://github.com/anncwb/vue-vben-admin/commit/6ef62ba6ea7f5613a1fec982b30fe6b0f478bf59))
- **locale:** reduce the number of multilingual files ([0acc4ab](https://github.com/anncwb/vue-vben-admin/commit/0acc4ab2dd70a239bd13929edede02b283feb7c2))
- **PageWrapper:** fix the height calculation problem when footer and global footer are opened at the same time ([#760](https://github.com/anncwb/vue-vben-admin/issues/760)) ([ab2c7ef](https://github.com/anncwb/vue-vben-admin/commit/ab2c7efe6994dacfe0ff407783f2c3b246427bfc))
- **utils:** mitt default export is changed from Class to Function ([d3d620f](https://github.com/anncwb/vue-vben-admin/commit/d3d620f4fc75dd69270e4d090a71d426701272ef))
- add createImgPreview func ([#713](https://github.com/anncwb/vue-vben-admin/issues/713)) ([b7c7c46](https://github.com/anncwb/vue-vben-admin/commit/b7c7c46853d332641d116d818e657447884784f3))
- optimize components and add comments ([55e9d9f](https://github.com/anncwb/vue-vben-admin/commit/55e9d9fc2953643cec95c74b6ed34b0e68641fb6))

## [2.4.2](https://github.com/anncwb/vue-vben-admin/compare/v2.4.0...v2.4.2) (2021-06-09)

### Bug Fixes

- fix darkModeSwitch switch failure ([34a8054](https://github.com/anncwb/vue-vben-admin/commit/34a80542de670f0385dffaf5bf64bb9c3f6b90da))
- **api-select:** loss option data on event callback ([c5f2577](https://github.com/anncwb/vue-vben-admin/commit/c5f2577f515e7ae96b27b509e5dd4b3317fcb7b4)), closes [#733](https://github.com/anncwb/vue-vben-admin/issues/733)
- **avatar:** mock data and Account center style ([2066f66](https://github.com/anncwb/vue-vben-admin/commit/2066f669715491f3e91ac6d0e905cd2b3e80b58d))
- **axios:** transformRequestHook logic error ([b69dcd7](https://github.com/anncwb/vue-vben-admin/commit/b69dcd79d742fd171302ce0f48c7750d60da217f))
- **codeMirror:** fix the JsonEditor embedded in the bullet frame causing the style to be disordered ([#668](https://github.com/anncwb/vue-vben-admin/issues/668)) ([e1123a2](https://github.com/anncwb/vue-vben-admin/commit/e1123a2ccb5d5450a5072c19e5508a5dc0f14423))
- **demo:** `breadcrumb` route invalid redirect ([84d9300](https://github.com/anncwb/vue-vben-admin/commit/84d9300e52fa73da575591aa4b71858a7e459c8c))
- **demo:** account list page validate and save ([21f7a85](https://github.com/anncwb/vue-vben-admin/commit/21f7a854fe2455315287d04e895661ff739bce17))
- **demo:** fix basic form page style ([8b6e07b](https://github.com/anncwb/vue-vben-admin/commit/8b6e07b768f110f13b4f2efa6c46e03266667a8c))
- **demo:** make sure the map https resource is correct ([7b9cd09](https://github.com/anncwb/vue-vben-admin/commit/7b9cd09ad8a50c45b2e661e07953d786d82f367d))
- **form:** fix form update problem ([bcad95d](https://github.com/anncwb/vue-vben-admin/commit/bcad95d32a08a73f84ecbabab409cd64159f4077)), closes [#720](https://github.com/anncwb/vue-vben-admin/issues/720)
- **form:** radioButtonGroup value support boolean ([9e2aa20](https://github.com/anncwb/vue-vben-admin/commit/9e2aa20daa08d2902cb5d56c1560306947e44939))
- **form:** radioButtonGroup value support number ([bbddf30](https://github.com/anncwb/vue-vben-admin/commit/bbddf30e96feb1ab048323d93d3b8c1b18857acd))
- **form:** schemas update problem ([808328d](https://github.com/anncwb/vue-vben-admin/commit/808328dc7e56b1cc07b678d501d9589290173443)), closes [#688](https://github.com/anncwb/vue-vben-admin/issues/688)
- **keep-alive:** tablist cache updating effect ([d62d0ca](https://github.com/anncwb/vue-vben-admin/commit/d62d0ca08cff442c23eb9265851b066a2f24afa8)), closes [#695](https://github.com/anncwb/vue-vben-admin/issues/695)
- **lock:** fix lock modal height ([40e3cb0](https://github.com/anncwb/vue-vben-admin/commit/40e3cb043c90a8343fa44a32acad2cb77de732da)), closes [#701](https://github.com/anncwb/vue-vben-admin/issues/701)
- **login:** login page modal style fixed: [#662](https://github.com/anncwb/vue-vben-admin/issues/662) ([#666](https://github.com/anncwb/vue-vben-admin/issues/666)) ([b218f10](https://github.com/anncwb/vue-vben-admin/commit/b218f10e25a9364c399a5fe42eedb549f57c01ea))
- **mock:** menu list api loss `type` field ([4185412](https://github.com/anncwb/vue-vben-admin/commit/41854121f3713dbde236afd3a416e9f27bd0c673))
- **mock:** type error ([7c1ffa3](https://github.com/anncwb/vue-vben-admin/commit/7c1ffa3d23de508a8d1590985806cb7a484b24e5))
- **router:** loss `directory` route ([df8cd86](https://github.com/anncwb/vue-vben-admin/commit/df8cd860514f32f44847dcf724f0737ed4d8b9e0)), closes [#722](https://github.com/anncwb/vue-vben-admin/issues/722)
- build error ([5212ea7](https://github.com/anncwb/vue-vben-admin/commit/5212ea79b43c832a5136354b549de8f89b6e2156))
- **axios:** make sure that the parameter is an object before processing, fix [#660](https://github.com/anncwb/vue-vben-admin/issues/660) ([834fa7e](https://github.com/anncwb/vue-vben-admin/commit/834fa7eb9c8aff252e083d38fdab4f6f53b4d43a))
- **code-editor:** fix CodeEditor style problem, fix [#655](https://github.com/anncwb/vue-vben-admin/issues/655) ([5662804](https://github.com/anncwb/vue-vben-admin/commit/566280422de0537c4e31496eaaa95a9d51fe9458))
- **codeeditor:** empty value set failed.fixed:[#659](https://github.com/anncwb/vue-vben-admin/issues/659) ([ba2bebb](https://github.com/anncwb/vue-vben-admin/commit/ba2bebb4069085817a90d065ed5877fdb50a8039))
- **layout:** fix class loss ([d018363](https://github.com/anncwb/vue-vben-admin/commit/d018363ddcd68189a18829a2b2560f3b98da58a6))
- **layout:** fix style compatibility issues ([905e5b7](https://github.com/anncwb/vue-vben-admin/commit/905e5b714b582548f32feca723012124343686a6))
- **log:** fix Wrong version number ([#653](https://github.com/anncwb/vue-vben-admin/issues/653)) ([4f0d45f](https://github.com/anncwb/vue-vben-admin/commit/4f0d45f1df48755eadc0b09fa19762ee68f9abd1))
- **modal:** redoModalHeight not work as expected ([5d554f1](https://github.com/anncwb/vue-vben-admin/commit/5d554f184f7b61774d1a1b2e61451677b38505de))
- **page:** `basic form` action btns should be in line ([6c4f947](https://github.com/anncwb/vue-vben-admin/commit/6c4f947386c181f45253c94e4ef735d29a253053))
- **radio-button:** fix RadioButton `disabled` support ([ee384b1](https://github.com/anncwb/vue-vben-admin/commit/ee384b1fa7e387b3680e9d54cbe4a1e2f15ec750)), closes [#710](https://github.com/anncwb/vue-vben-admin/issues/710)
- **table:** wrong indeterminate state ([495b1da](https://github.com/anncwb/vue-vben-admin/commit/495b1da385e9b6428d2b994669d2065722445923))
- **table:** make sure the table width is correct, fix [#593](https://github.com/anncwb/vue-vben-admin/issues/593) ([d73d43e](https://github.com/anncwb/vue-vben-admin/commit/d73d43ed91f30957cfd202c51552ca40a19cef08))
- **table:** settings indeterminate state effect ([4fd2051](https://github.com/anncwb/vue-vben-admin/commit/4fd2051bc0403bfc5345ed6a5fc283a372ef7a92))
- **table:** support change event ([9f4d171](https://github.com/anncwb/vue-vben-admin/commit/9f4d1719caa76de94e6362c16e4df3ac28df253c)), closes [#677](https://github.com/anncwb/vue-vben-admin/issues/677)
- **table:** try to get close to the form stuck ([d81481c](https://github.com/anncwb/vue-vben-admin/commit/d81481c52186145dac130aaa1594f0ba8db4d392))
- **Tinymce:** Read only status upload button can also be used ([#718](https://github.com/anncwb/vue-vben-admin/issues/718)) ([966571b](https://github.com/anncwb/vue-vben-admin/commit/966571bdcb11c2729ab9ce212bd3e195f7bf3a59))
- **upload:** ensure preview items valid ([4376928](https://github.com/anncwb/vue-vben-admin/commit/437692869a232ee65c300c65ee473557ae0913c7))
- ensure that roleList is not empty ([aebad61](https://github.com/anncwb/vue-vben-admin/commit/aebad61b3d3e11aaf720b37e762e53e2e6999d3c))
- fix node12 version data mock error ([644dbe3](https://github.com/anncwb/vue-vben-admin/commit/644dbe315bb03ea1641a682359873237208a5303))
- Fix the problem that the `lang` attribute of `HTML` will not be set when it is first loaded ([#682](https://github.com/anncwb/vue-vben-admin/issues/682)) ([eca8907](https://github.com/anncwb/vue-vben-admin/commit/eca8907a11c28d816c3da5a0667f45a38a499012))
- **table:** useTable support onChange ([9f5085c](https://github.com/anncwb/vue-vben-admin/commit/9f5085c9f9f46b09391156b17091c1771bc13026))
- **table-action:** fix the split line style is missing,fix [#674](https://github.com/anncwb/vue-vben-admin/issues/674) ([b1cb863](https://github.com/anncwb/vue-vben-admin/commit/b1cb86350253dc5be095466966d9469775f4395d))
- login failed ([035f55a](https://github.com/anncwb/vue-vben-admin/commit/035f55af9778819d72adc1700d9de56a6569b58f))
- session timeout login logic error ([#678](https://github.com/anncwb/vue-vben-admin/issues/678)) ([132c7fb](https://github.com/anncwb/vue-vben-admin/commit/132c7fb944df255c4d76a25d6d924439f91f9c54)), closes [#673](https://github.com/anncwb/vue-vben-admin/issues/673)
- **tree:** support defaultExpandAll prop ([3ed2339](https://github.com/anncwb/vue-vben-admin/commit/3ed2339a6d75abbd6ccf723b6eaa762f9921409e))
- theme switching fails ([7e2ca79](https://github.com/anncwb/vue-vben-admin/commit/7e2ca79ece2f5209cb7ce4b0f5ee15012f9f51de))

### Features

- **api-select:** auto refetch after params changed ([50207ad](https://github.com/anncwb/vue-vben-admin/commit/50207ad702ef3faca1e27c873c89132ab92fae8e))
- **app-search:** auto focus on show ([1ae6362](https://github.com/anncwb/vue-vben-admin/commit/1ae636296df2cf99e8a777f053c539c50e6ad49a))
- **demo:** `switch` use in table ([46899aa](https://github.com/anncwb/vue-vben-admin/commit/46899aa3cd6b1616c42ac263a28af75be839f6a0))
- **echarts:** add getInstance for useECharts ([fb6c76d](https://github.com/anncwb/vue-vben-admin/commit/fb6c76db535bd0c6305d03c0cff876a1f079100b))
- **modal:** add closeModal for useModal ([6d5f9aa](https://github.com/anncwb/vue-vben-admin/commit/6d5f9aa699c5da8af6bf5841baddc4a8bd603917))
- **modal:** add redoModalHeight for useModalInner ([f732b56](https://github.com/anncwb/vue-vben-admin/commit/f732b569042f7fe77c85cb295538ddd85561f7e9))
- **table:** add editable DatePicker & TimePicker ([#654](https://github.com/anncwb/vue-vben-admin/issues/654)) ([93006c7](https://github.com/anncwb/vue-vben-admin/commit/93006c7dc7b5243b26637f444c8057c95935e622))
- **table:** add updateTableDataRecord method ([8e4f486](https://github.com/anncwb/vue-vben-admin/commit/8e4f486fcf835f0b6f2a95676dba268ffdd0566e))
- **table:** editable component text align ([8eaf575](https://github.com/anncwb/vue-vben-admin/commit/8eaf57562610a833c8083ae9957f458319d1cc93))
- **table:** support columns-change event ([125a7d1](https://github.com/anncwb/vue-vben-admin/commit/125a7d14831642c9cbb2e4b3e75953c3b2e2cdef))
- **table:** support custom update on row editing ([fe2bcfc](https://github.com/anncwb/vue-vben-admin/commit/fe2bcfc6f74159c355f3be153a316869fdb8b644)), closes [#646](https://github.com/anncwb/vue-vben-admin/issues/646)
- **table:** updateTableDataRecord support functional rowKey ([448a4c2](https://github.com/anncwb/vue-vben-admin/commit/448a4c2809672480f8f635d7cc4661554112598a))
- **table-action:** add stopButtonPropagation prop ([808012b](https://github.com/anncwb/vue-vben-admin/commit/808012b544b8c6f3cf467f42653c2783dbe8be6b)), closes [#699](https://github.com/anncwb/vue-vben-admin/issues/699)
- **table-img:** support simple show mode and more props ([19d8e01](https://github.com/anncwb/vue-vben-admin/commit/19d8e01e11644c66222f137abd05940cbdec0bb6))
- **tabs:** add setTabTitle method ([#680](https://github.com/anncwb/vue-vben-admin/issues/680)) ([5ddccf6](https://github.com/anncwb/vue-vben-admin/commit/5ddccf6ba28453b9a35355d53d0db65f1a8876bc))
- **tinymce:** support dark theme and I18n ([83c9cd7](https://github.com/anncwb/vue-vben-admin/commit/83c9cd77421e9c0888a41e2d8dcbca816da67488))
- **Tinymce:** add dynamics to the read-only state of the rich text editor ([#725](https://github.com/anncwb/vue-vben-admin/issues/725)) ([efce482](https://github.com/anncwb/vue-vben-admin/commit/efce482b3215ddf9ed588f63a218d5f76939e947))
- **tree:** add defaultExpandLevel prop ([6edca1c](https://github.com/anncwb/vue-vben-admin/commit/6edca1c19c3b0772f9ab82a7b09251a74fff2173)), closes [#672](https://github.com/anncwb/vue-vben-admin/issues/672)

### Performance Improvements

- optimize components and add comments ([55e9d9f](https://github.com/anncwb/vue-vben-admin/commit/55e9d9fc2953643cec95c74b6ed34b0e68641fb6))
- **i18n:** improve circular dependencies ([d677729](https://github.com/anncwb/vue-vben-admin/commit/d677729acbe2c024ab13cf490b205528507c4823))
- **i18n:** improve warning prompt ([6ef62ba](https://github.com/anncwb/vue-vben-admin/commit/6ef62ba6ea7f5613a1fec982b30fe6b0f478bf59))

## [2.4.1](https://github.com/anncwb/vue-vben-admin/compare/v2.4.0...v2.4.1) (2021-06-01)

### Bug Fixes

- **table:** make sure the table width is correct, fix [#593](https://github.com/anncwb/vue-vben-admin/issues/593) ([d73d43e](https://github.com/anncwb/vue-vben-admin/commit/d73d43ed91f30957cfd202c51552ca40a19cef08))
- Fix the problem that the `lang` attribute of `HTML` will not be set when it is first loaded ([#682](https://github.com/anncwb/vue-vben-admin/issues/682)) ([eca8907](https://github.com/anncwb/vue-vben-admin/commit/eca8907a11c28d816c3da5a0667f45a38a499012))
- **avatar:** mock data and Account center style ([2066f66](https://github.com/anncwb/vue-vben-admin/commit/2066f669715491f3e91ac6d0e905cd2b3e80b58d))
- **axios:** make sure that the parameter is an object before processing, fix [#660](https://github.com/anncwb/vue-vben-admin/issues/660) ([834fa7e](https://github.com/anncwb/vue-vben-admin/commit/834fa7eb9c8aff252e083d38fdab4f6f53b4d43a))
- **code-editor:** fix CodeEditor style problem, fix [#655](https://github.com/anncwb/vue-vben-admin/issues/655) ([5662804](https://github.com/anncwb/vue-vben-admin/commit/566280422de0537c4e31496eaaa95a9d51fe9458))
- **codeMirror:** fix the JsonEditor embedded in the bullet frame causing the style to be disordered ([#668](https://github.com/anncwb/vue-vben-admin/issues/668)) ([e1123a2](https://github.com/anncwb/vue-vben-admin/commit/e1123a2ccb5d5450a5072c19e5508a5dc0f14423))
- **form:** radioButtonGroup value support number ([bbddf30](https://github.com/anncwb/vue-vben-admin/commit/bbddf30e96feb1ab048323d93d3b8c1b18857acd))
- ensure that roleList is not empty ([aebad61](https://github.com/anncwb/vue-vben-admin/commit/aebad61b3d3e11aaf720b37e762e53e2e6999d3c))
- fix node12 version data mock error ([644dbe3](https://github.com/anncwb/vue-vben-admin/commit/644dbe315bb03ea1641a682359873237208a5303))
- **codeeditor:** empty value set failed.fixed:[#659](https://github.com/anncwb/vue-vben-admin/issues/659) ([ba2bebb](https://github.com/anncwb/vue-vben-admin/commit/ba2bebb4069085817a90d065ed5877fdb50a8039))
- **layout:** fix style compatibility issues ([905e5b7](https://github.com/anncwb/vue-vben-admin/commit/905e5b714b582548f32feca723012124343686a6))
- **login:** login page modal style fixed: [#662](https://github.com/anncwb/vue-vben-admin/issues/662) ([#666](https://github.com/anncwb/vue-vben-admin/issues/666)) ([b218f10](https://github.com/anncwb/vue-vben-admin/commit/b218f10e25a9364c399a5fe42eedb549f57c01ea))
- **table:** support change event ([9f4d171](https://github.com/anncwb/vue-vben-admin/commit/9f4d1719caa76de94e6362c16e4df3ac28df253c)), closes [#677](https://github.com/anncwb/vue-vben-admin/issues/677)
- **table:** useTable support onChange ([9f5085c](https://github.com/anncwb/vue-vben-admin/commit/9f5085c9f9f46b09391156b17091c1771bc13026))
- **table-action:** fix the split line style is missing,fix [#674](https://github.com/anncwb/vue-vben-admin/issues/674) ([b1cb863](https://github.com/anncwb/vue-vben-admin/commit/b1cb86350253dc5be095466966d9469775f4395d))
- login failed ([035f55a](https://github.com/anncwb/vue-vben-admin/commit/035f55af9778819d72adc1700d9de56a6569b58f))
- session timeout login logic error ([#678](https://github.com/anncwb/vue-vben-admin/issues/678)) ([132c7fb](https://github.com/anncwb/vue-vben-admin/commit/132c7fb944df255c4d76a25d6d924439f91f9c54)), closes [#673](https://github.com/anncwb/vue-vben-admin/issues/673)
- **layout:** fix class loss ([d018363](https://github.com/anncwb/vue-vben-admin/commit/d018363ddcd68189a18829a2b2560f3b98da58a6))
- **log:** fix Wrong version number ([#653](https://github.com/anncwb/vue-vben-admin/issues/653)) ([4f0d45f](https://github.com/anncwb/vue-vben-admin/commit/4f0d45f1df48755eadc0b09fa19762ee68f9abd1))
- **tree:** support defaultExpandAll prop ([3ed2339](https://github.com/anncwb/vue-vben-admin/commit/3ed2339a6d75abbd6ccf723b6eaa762f9921409e))
- theme switching fails ([7e2ca79](https://github.com/anncwb/vue-vben-admin/commit/7e2ca79ece2f5209cb7ce4b0f5ee15012f9f51de))

### Features

- **app-search:** auto focus on show ([1ae6362](https://github.com/anncwb/vue-vben-admin/commit/1ae636296df2cf99e8a777f053c539c50e6ad49a))
- **table:** add editable DatePicker & TimePicker ([#654](https://github.com/anncwb/vue-vben-admin/issues/654)) ([93006c7](https://github.com/anncwb/vue-vben-admin/commit/93006c7dc7b5243b26637f444c8057c95935e622))
- **table:** editable component text align ([8eaf575](https://github.com/anncwb/vue-vben-admin/commit/8eaf57562610a833c8083ae9957f458319d1cc93))
- **tabs:** add setTabTitle method ([#680](https://github.com/anncwb/vue-vben-admin/issues/680)) ([5ddccf6](https://github.com/anncwb/vue-vben-admin/commit/5ddccf6ba28453b9a35355d53d0db65f1a8876bc))
- **tinymce:** support dark theme and I18n ([83c9cd7](https://github.com/anncwb/vue-vben-admin/commit/83c9cd77421e9c0888a41e2d8dcbca816da67488))
- **tree:** add defaultExpandLevel prop ([6edca1c](https://github.com/anncwb/vue-vben-admin/commit/6edca1c19c3b0772f9ab82a7b09251a74fff2173)), closes [#672](https://github.com/anncwb/vue-vben-admin/issues/672)

### Performance Improvements

- **i18n:** improve warning prompt ([6ef62ba](https://github.com/anncwb/vue-vben-admin/commit/6ef62ba6ea7f5613a1fec982b30fe6b0f478bf59))

# [2.4.0](https://github.com/anncwb/vue-vben-admin/compare/v2.2.0...v2.4.0) (2021-05-25)

### Bug Fixes

- **api-select:** make sure the type is correct, fix [#468](https://github.com/anncwb/vue-vben-admin/issues/468) ([37c5741](https://github.com/anncwb/vue-vben-admin/commit/37c5741601951349f622801a48a7bf9e45d723a4))
- **avatar:** show current user's avatar ([#640](https://github.com/anncwb/vue-vben-admin/issues/640)) ([7519a00](https://github.com/anncwb/vue-vben-admin/commit/7519a00ada89966f9caf93d315830dd628253d73))
- **button:** ghost style ([f4af231](https://github.com/anncwb/vue-vben-admin/commit/f4af231172874eeffa9097e2624c4a7d0654f7d7))
- **cipher:** fix [#587](https://github.com/anncwb/vue-vben-admin/issues/587) ([#588](https://github.com/anncwb/vue-vben-admin/issues/588)) ([d34467d](https://github.com/anncwb/vue-vben-admin/commit/d34467d3f4d0f709a99194e36c0e0b6f242d9b40))
- **CodeEditor:** add readonly prop ([#572](https://github.com/anncwb/vue-vben-admin/issues/572)) ([9cd293c](https://github.com/anncwb/vue-vben-admin/commit/9cd293c283ede7391ccd36e2208ae68cbad66453))
- **flow-chart:** dark style not work ([4a03547](https://github.com/anncwb/vue-vben-admin/commit/4a035478ca0e08098a4575a5b22c06580ffeecbe))
- **form:** ensure that the DateTime component checked properly,fix [#511](https://github.com/anncwb/vue-vben-admin/issues/511) ([cb35341](https://github.com/anncwb/vue-vben-admin/commit/cb35341b8fd44eb649a79c3a2ae799c7bab8c4f6))
- **form:** expose formModel,fix [#533](https://github.com/anncwb/vue-vben-admin/issues/533) ([7c41c86](https://github.com/anncwb/vue-vben-admin/commit/7c41c8673c2fd5f2cf946a3ae84d8688578f9754))
- **form:** Improve form error handling ([9a21b8b](https://github.com/anncwb/vue-vben-admin/commit/9a21b8b6a4a33d69c4e1b439fc01c4038c150ff9))
- **form:** improve form props acquisition,fix [#527](https://github.com/anncwb/vue-vben-admin/issues/527) ([b7ea68e](https://github.com/anncwb/vue-vben-admin/commit/b7ea68e6f8944b154edf1fccd3faf8744883cbd4))
- **form:** improve warning prompt, fix [#538](https://github.com/anncwb/vue-vben-admin/issues/538) ([3ff70bb](https://github.com/anncwb/vue-vben-admin/commit/3ff70bb56f998cfc92a773676d75c06372d90658))
- **form:** placeholder setting in componentProps ([#634](https://github.com/anncwb/vue-vben-admin/issues/634)) ([2d3d04f](https://github.com/anncwb/vue-vben-admin/commit/2d3d04f547046c23cdfc319a7483261b47c08e83))
- **form:** remove field binding when deleting schema [#471](https://github.com/anncwb/vue-vben-admin/issues/471) ([38f5072](https://github.com/anncwb/vue-vben-admin/commit/38f5072695f63b30c6ce6b2741b003db605abd82))
- **layout:** fix useLockPage not work, fix [#611](https://github.com/anncwb/vue-vben-admin/issues/611) ([3bb6d11](https://github.com/anncwb/vue-vben-admin/commit/3bb6d11ed1b33adbfd6c76a0e06442cd62356ab7))
- **lock:** automatic screen lock does not work ([d5b7689](https://github.com/anncwb/vue-vben-admin/commit/d5b768929e02ac4c6a04f3fd17a904e894c50e36))
- **login:** incorrect enter event bind ([#625](https://github.com/anncwb/vue-vben-admin/issues/625)) ([bb0d2e1](https://github.com/anncwb/vue-vben-admin/commit/bb0d2e1c71899937f3c3d467803b18013e91782a))
- **menu:** ensure that the external link jumps correctly, fix [#516](https://github.com/anncwb/vue-vben-admin/issues/516) ([6b7f688](https://github.com/anncwb/vue-vben-admin/commit/6b7f688eaf08184272fc625ca7e7665384641714))
- **menu:** improve menu logic, fix [#461](https://github.com/anncwb/vue-vben-admin/issues/461) ([ee1c349](https://github.com/anncwb/vue-vben-admin/commit/ee1c3498587951a6a4cc0b49edb9dacf3f2af5c3))
- **modal:** proptype conflict with ant design modal(fixed: [#545](https://github.com/anncwb/vue-vben-admin/issues/545)) ([#575](https://github.com/anncwb/vue-vben-admin/issues/575)) ([a579b84](https://github.com/anncwb/vue-vben-admin/commit/a579b8456ac73ac48c6af1510317acca20ed9b52))
- **store:** addTab fx ([#607](https://github.com/anncwb/vue-vben-admin/issues/607)) ([336be68](https://github.com/anncwb/vue-vben-admin/commit/336be680d307acf8a1710194eba5505f8532d0bb))
- **store:** fix pinia typo ([bbf178f](https://github.com/anncwb/vue-vben-admin/commit/bbf178f64b29d4576ba7de8afdce37d677f748e8))
- **style:** add table title min-height ([#547](https://github.com/anncwb/vue-vben-admin/issues/547)) ([bf365e2](https://github.com/anncwb/vue-vben-admin/commit/bf365e26e5d457ca1924def3e50097e1d211aa43))
- **style:** fix icon style, fix [#496](https://github.com/anncwb/vue-vben-admin/issues/496) ([ccae5cd](https://github.com/anncwb/vue-vben-admin/commit/ccae5cd9246888709a319f92357d89c6ab9d9c0b))
- **style:** fix layout style, fix [#633](https://github.com/anncwb/vue-vben-admin/issues/633) ([8e3f84c](https://github.com/anncwb/vue-vben-admin/commit/8e3f84c3b76fbca11222cbede2441e83154127b6))
- **theme:** make sure the menu style is correct, fix [#382](https://github.com/anncwb/vue-vben-admin/issues/382) ([c77f7e6](https://github.com/anncwb/vue-vben-admin/commit/c77f7e62aba51072325dffdb01d3c0cc87c578b0))
- **theme:** make sure the steps style is correct, fix [#414](https://github.com/anncwb/vue-vben-admin/issues/414) ([640a2c1](https://github.com/anncwb/vue-vben-admin/commit/640a2c17986e2b59be57125e91051ec879f31eeb))
- **types:** fix store types ([cd4b5e1](https://github.com/anncwb/vue-vben-admin/commit/cd4b5e14c2afe8841871cf79490a02a30bed0ebe))
- typo, ifx [#637](https://github.com/anncwb/vue-vben-admin/issues/637) ([e3569b8](https://github.com/anncwb/vue-vben-admin/commit/e3569b81b10e887ed7144349181904ea6fdef14d))
- **style:** fix build style errors,fix [#528](https://github.com/anncwb/vue-vben-admin/issues/528) ([7f6f8ee](https://github.com/anncwb/vue-vben-admin/commit/7f6f8eefe9b1214d5c6dabc526d966dfcaea76e6))
- **style:** fix layout header style, basic arrow style and table search form style ([#525](https://github.com/anncwb/vue-vben-admin/issues/525)) ([e2ddf43](https://github.com/anncwb/vue-vben-admin/commit/e2ddf43699df900dacab7d7d384d7caa53879ad9))
- **table:** columns ref fixed([#564](https://github.com/anncwb/vue-vben-admin/issues/564)) ([#573](https://github.com/anncwb/vue-vben-admin/issues/573)) ([43e4c21](https://github.com/anncwb/vue-vben-admin/commit/43e4c21950ea3659c538ecc29b04b0377a6de874))
- **table:** submitButtonOptions not work,fix [#531](https://github.com/anncwb/vue-vben-admin/issues/531) ([16ecf71](https://github.com/anncwb/vue-vben-admin/commit/16ecf71850675be0031f41c8cb91371cf07cbea0))
- **tabs:** fix the problem that other functions are invalid when the tab is closed, close [#376](https://github.com/anncwb/vue-vben-admin/issues/376) ([b92b8a3](https://github.com/anncwb/vue-vben-admin/commit/b92b8a3c6af1d936d48b5f58674f419407eeb600))
- **theme:** wrong color when RadioButtonGroup checked ([#626](https://github.com/anncwb/vue-vben-admin/issues/626)) ([5eee0ce](https://github.com/anncwb/vue-vben-admin/commit/5eee0ceb6e1e949e63d51cd0d9647cf8094f378c))
- **theme generate:** Fix [#604](https://github.com/anncwb/vue-vben-admin/issues/604) ([#605](https://github.com/anncwb/vue-vben-admin/issues/605)) ([c26dd03](https://github.com/anncwb/vue-vben-admin/commit/c26dd034165b02d107977fdfe13471ea80e991cc))
- **tinymce:** ensure that the public resource path is correct,fix [#487](https://github.com/anncwb/vue-vben-admin/issues/487) ([a863ad4](https://github.com/anncwb/vue-vben-admin/commit/a863ad46b4e2837cbbda8bb51b8c9a6e8bb3f442))
- **tree:** basicTree 设置 blockNode=false 后，显示异常 ([#567](https://github.com/anncwb/vue-vben-admin/issues/567)) ([2f8b218](https://github.com/anncwb/vue-vben-admin/commit/2f8b2183ec25f7c2a11bb5dc0a0a2578d7568ec3))
- **tree:** onCheck event lose origin param ([#636](https://github.com/anncwb/vue-vben-admin/issues/636)) ([d8ff30d](https://github.com/anncwb/vue-vben-admin/commit/d8ff30d9ece53e006e5e58894461adeeb3b273e0))
- **tree:** typo([#615](https://github.com/anncwb/vue-vben-admin/issues/615)) ([bc82d1a](https://github.com/anncwb/vue-vben-admin/commit/bc82d1a397beff68ba86365d7d54bb70b3520f9f))
- **tree:** value prop type ([#613](https://github.com/anncwb/vue-vben-admin/issues/613)) ([0112d6b](https://github.com/anncwb/vue-vben-admin/commit/0112d6b313e66f624cd91e9ef933af57b0d280f9))
- echart import path ([7e43d88](https://github.com/anncwb/vue-vben-admin/commit/7e43d88f9c37d88d7bf1b2d29e8ffbdc7ca155a5))
- ensure that the 401 jumps to the login page correctly, fix [#512](https://github.com/anncwb/vue-vben-admin/issues/512) ([6a88205](https://github.com/anncwb/vue-vben-admin/commit/6a8820597fb58ef7cda7ead59f5cbb4c72c0f882))
- fix AppendFormDemo ([#505](https://github.com/anncwb/vue-vben-admin/issues/505)) ([8c2491f](https://github.com/anncwb/vue-vben-admin/commit/8c2491fcb6853bfe06df265eb6daa5aa7d979b74))
- fix case errors ([663d13a](https://github.com/anncwb/vue-vben-admin/commit/663d13a67f84fb02a6b9ee44a6e8b53c32cc6044))
- fix dark theme refreshing flashing white screen ([26adbc9](https://github.com/anncwb/vue-vben-admin/commit/26adbc92be1c8ce5ce6f93302fb806058ef087cf))
- fix the default value of props ([8b2e0f6](https://github.com/anncwb/vue-vben-admin/commit/8b2e0f665f15edd211f558bc0526465e07e7bab0))
- improve login page style ([780a8a6](https://github.com/anncwb/vue-vben-admin/commit/780a8a67b874ca1c8d05c2561f88081cc4ec4b28))
- Improve the picture cropping component ([#463](https://github.com/anncwb/vue-vben-admin/issues/463)) ([700306b](https://github.com/anncwb/vue-vben-admin/commit/700306bb45d5f2b975c20bd2581fb87a210e589c))
- login page overflow show problem ([#455](https://github.com/anncwb/vue-vben-admin/issues/455)) ([af6d58e](https://github.com/anncwb/vue-vben-admin/commit/af6d58eb26875f02afb419d9d4d5ee2454292863))
- password icon dislocation ([#501](https://github.com/anncwb/vue-vben-admin/issues/501)) ([bd83ecc](https://github.com/anncwb/vue-vben-admin/commit/bd83eccdc55c697d0db83bc3a7cf2829cafe96e7))
- trigger resize in full screen to ensure that the height of other components is normal,fix [#508](https://github.com/anncwb/vue-vben-admin/issues/508) ([ca71760](https://github.com/anncwb/vue-vben-admin/commit/ca717602a602ae90e5c175cdfda0bbcc200b72ad))
- update Axios.ts ([#492](https://github.com/anncwb/vue-vben-admin/issues/492)) ([e1b30a5](https://github.com/anncwb/vue-vben-admin/commit/e1b30a5075a2a2f9e2c538350950e6e09b6decd1))

### Features

- **axios:** Do you want to return the original response header? For example, use this property when you need to get the response header ([56d8af1](https://github.com/anncwb/vue-vben-admin/commit/56d8af147ec88bb98a37fa3ddf47c2aa16a4110e))
- **demo:** add permission table demo ([9e20841](https://github.com/anncwb/vue-vben-admin/commit/9e208411a24d4ccc9306555cc45aa7135d0df78f))
- **form:** add 'layout', 'labelAlign', 'rowProps' option ([#651](https://github.com/anncwb/vue-vben-admin/issues/651)) ([785732f](https://github.com/anncwb/vue-vben-admin/commit/785732f438916d7767ad44789c16216a6f6505a8))
- **form:** add form field nested support ([#591](https://github.com/anncwb/vue-vben-admin/issues/591)) ([ec3d51d](https://github.com/anncwb/vue-vben-admin/commit/ec3d51d69b66500f4f604151255920460d1906ce))
- **form:** add prop autoSubmitOnEnter ([#620](https://github.com/anncwb/vue-vben-admin/issues/620)) ([9b2d41e](https://github.com/anncwb/vue-vben-admin/commit/9b2d41ea44ed0da4dde22856bf23b52748244642))
- **form:** add Slider demo ([#555](https://github.com/anncwb/vue-vben-admin/issues/555)) ([e80280f](https://github.com/anncwb/vue-vben-admin/commit/e80280fb81b0bcdd74066c08fd4403e36b00b026))
- **form:** adding resetSchema method ([c639e49](https://github.com/anncwb/vue-vben-admin/commit/c639e493a5a32789e397990953189541170169c8))
- **form:** helpMessage Increase function type value ([#616](https://github.com/anncwb/vue-vben-admin/issues/616)) ([f455fb9](https://github.com/anncwb/vue-vben-admin/commit/f455fb97f9b70ca4979561a82ae0f25825527013))
- **form:** requires Increase function type value ([#649](https://github.com/anncwb/vue-vben-admin/issues/649)) ([765064a](https://github.com/anncwb/vue-vben-admin/commit/765064a190b1a24dfb9ae808e99807ddae2ed212))
- **qrcode:** custom drawing support ([#580](https://github.com/anncwb/vue-vben-admin/issues/580)) ([2b76b88](https://github.com/anncwb/vue-vben-admin/commit/2b76b88481dab2c580e684987a80028710d4698d))
- **table:** 表格的数据列和操作列的字段可以根据权限和业务来控制是否显示 ([5a3861b](https://github.com/anncwb/vue-vben-admin/commit/5a3861b9cfc79da3297f8ddd045b88f0daca0ada))
- **table:** Table operation columns support permission codes ([6afee41](https://github.com/anncwb/vue-vben-admin/commit/6afee415a3a8007f13af57892d62759ffbcde5a5))
- **user:** add user login expiration example ([5465f05](https://github.com/anncwb/vue-vben-admin/commit/5465f058ceb7b130e456feaebb17c3beedb092a5))
- add codeEditor component ([a812685](https://github.com/anncwb/vue-vben-admin/commit/a812685084b45ce3c6b6675bb1569e324f742416))
- add flowChart Component ([#488](https://github.com/anncwb/vue-vben-admin/issues/488)) ([2576735](https://github.com/anncwb/vue-vben-admin/commit/2576735adeb42ddd39bbaae6f4f5662df781b83a))
- add JsonPreview component ([0649011](https://github.com/anncwb/vue-vben-admin/commit/0649011eba9b86b543223aca99721da754dcea14))
- add spin prop for Icon ([#477](https://github.com/anncwb/vue-vben-admin/issues/477)) ([6dd7d0f](https://github.com/anncwb/vue-vben-admin/commit/6dd7d0f928ebb4c6d7be66f4cd134fb291fc7dc2))
- persistent save tab, fix [#359](https://github.com/anncwb/vue-vben-admin/issues/359) ([967b28c](https://github.com/anncwb/vue-vben-admin/commit/967b28c4c06cf92e9ab90cff51f59a0d6ced5d7b))

### Performance Improvements

- let svg-icon support ssr ([94a826d](https://github.com/anncwb/vue-vben-admin/commit/94a826d02858e115adf8c1db4c0d0d7d795d7281))
- **tree:** improve the beforeRightClick callback to support more configuration of the menu ([#608](https://github.com/anncwb/vue-vben-admin/issues/608)) ([adff788](https://github.com/anncwb/vue-vben-admin/commit/adff788de54a46fd035b569892135be377dd4f92))
- add AppendFormDemo ([#503](https://github.com/anncwb/vue-vben-admin/issues/503)) ([85b92a9](https://github.com/anncwb/vue-vben-admin/commit/85b92a9add2b560559b4ef60ecf93e22f5941edb))
- add Coordinating the selection of provinces and cities ([#534](https://github.com/anncwb/vue-vben-admin/issues/534)) ([5fae2b0](https://github.com/anncwb/vue-vben-admin/commit/5fae2b02eae7dc91baef774ca9dfdf0da91b8040))
- improve countTo ([#499](https://github.com/anncwb/vue-vben-admin/issues/499)) ([94b2222](https://github.com/anncwb/vue-vben-admin/commit/94b2222c085e30cbc4a7a49dfac13af15aec98b9))
- improve cropper example ([#491](https://github.com/anncwb/vue-vben-admin/issues/491)) ([5e36a8b](https://github.com/anncwb/vue-vben-admin/commit/5e36a8b5754afe916236f1c58a159aa7df69cf83))
- improve flowChart logic ([e1bc33f](https://github.com/anncwb/vue-vben-admin/commit/e1bc33f5c5660f62591997c1949c887ac7387871))
- merge locale file ([c04e894](https://github.com/anncwb/vue-vben-admin/commit/c04e8943bcdcdee612044a534d6c1281c956c3c1))
- optimize i18n to add the initial locale to the locale pool during initialization ([#577](https://github.com/anncwb/vue-vben-admin/issues/577)) ([ae3f832](https://github.com/anncwb/vue-vben-admin/commit/ae3f8329c25ef24c44c54690116fd7d3dc35ae85))
- set header can use For Qs ([#562](https://github.com/anncwb/vue-vben-admin/issues/562)) ([5724bc5](https://github.com/anncwb/vue-vben-admin/commit/5724bc5b3b960f7c0686c8e60c2b682b16841e6f))

# [2.3.0](https://github.com/anncwb/vue-vben-admin/compare/v2.2.0...v2.3.0) (2021-04-10)

### Bug Fixes

- **api-select:** make sure the type is correct, fix [#468](https://github.com/anncwb/vue-vben-admin/issues/468) ([37c5741](https://github.com/anncwb/vue-vben-admin/commit/37c5741601951349f622801a48a7bf9e45d723a4))
- **menu:** improve menu logic, fix [#461](https://github.com/anncwb/vue-vben-admin/issues/461) ([ee1c349](https://github.com/anncwb/vue-vben-admin/commit/ee1c3498587951a6a4cc0b49edb9dacf3f2af5c3))
- **theme:** make sure the menu style is correct, fix [#382](https://github.com/anncwb/vue-vben-admin/issues/382) ([c77f7e6](https://github.com/anncwb/vue-vben-admin/commit/c77f7e62aba51072325dffdb01d3c0cc87c578b0))
- **theme:** make sure the steps style is correct, fix [#414](https://github.com/anncwb/vue-vben-admin/issues/414) ([640a2c1](https://github.com/anncwb/vue-vben-admin/commit/640a2c17986e2b59be57125e91051ec879f31eeb))
- improve login page style ([780a8a6](https://github.com/anncwb/vue-vben-admin/commit/780a8a67b874ca1c8d05c2561f88081cc4ec4b28))
- Improve the picture cropping component ([#463](https://github.com/anncwb/vue-vben-admin/issues/463)) ([700306b](https://github.com/anncwb/vue-vben-admin/commit/700306bb45d5f2b975c20bd2581fb87a210e589c))
- login page overflow show problem ([#455](https://github.com/anncwb/vue-vben-admin/issues/455)) ([af6d58e](https://github.com/anncwb/vue-vben-admin/commit/af6d58eb26875f02afb419d9d4d5ee2454292863))

### Features

- persistent save tab, fix [#359](https://github.com/anncwb/vue-vben-admin/issues/359) ([967b28c](https://github.com/anncwb/vue-vben-admin/commit/967b28c4c06cf92e9ab90cff51f59a0d6ced5d7b))

# [2.2.0](https://github.com/anncwb/vue-vben-admin/compare/v2.1.1...v2.2.0) (2021-04-07)

### Bug Fixes

- **abakysis:** fix tooltip style,fix [#436](https://github.com/anncwb/vue-vben-admin/issues/436) ([1e4a250](https://github.com/anncwb/vue-vben-admin/commit/1e4a250da10b01bfd4e667d533f6cae9b8c58fe9))
- **breadcrumb:** ensure the breadcrumbs display the icon correctly, fix [#433](https://github.com/anncwb/vue-vben-admin/issues/433) ([0b66360](https://github.com/anncwb/vue-vben-admin/commit/0b66360cc9f60c5064be4c3cae39091541f3be8c))
- **build:** fix build error ([6d6e0a1](https://github.com/anncwb/vue-vben-admin/commit/6d6e0a1bfef3a152d31776520e1445203d2ba3f4))
- **drawer:** ensure the slot is working ([b9b470f](https://github.com/anncwb/vue-vben-admin/commit/b9b470f4df1cd57ca501666b6b3270a4d4d4f873))
- **echart:** legend not work ([b25ceb4](https://github.com/anncwb/vue-vben-admin/commit/b25ceb4201bce806dc129f24c2d98fd2ff0392d1))
- **menu:** ensure the menu is activated correctly,fix [#432](https://github.com/anncwb/vue-vben-admin/issues/432) ([bb67692](https://github.com/anncwb/vue-vben-admin/commit/bb67692cfdd5089f0f1d60d4a36b52592db22dde))
- **mock:** make sure the background mode login is normal, fix [#452](https://github.com/anncwb/vue-vben-admin/issues/452) ([1e66987](https://github.com/anncwb/vue-vben-admin/commit/1e669870cc15384bf76f32ee95008f0c998b477b))
- **server:** grammatical errors ([ee4829c](https://github.com/anncwb/vue-vben-admin/commit/ee4829c15d7c8e978eb616edb7f1e61c258d469b))
- **table:** ensure data responsiveness, fix [#447](https://github.com/anncwb/vue-vben-admin/issues/447) ([64b6313](https://github.com/anncwb/vue-vben-admin/commit/64b6313b4e43fdc2e9b292f554889b845e26182f))
- **table:** make sure the editing line is working, fix [#439](https://github.com/anncwb/vue-vben-admin/issues/439) ([b54b794](https://github.com/anncwb/vue-vben-admin/commit/b54b794264ecb513567b841c5a12856965d02754))
- **table-action:** ensure that the click event is not triggered, fix [#441](https://github.com/anncwb/vue-vben-admin/issues/441) ([67a7a76](https://github.com/anncwb/vue-vben-admin/commit/67a7a76b735aafe2e1a8258c75c4a3c5dd657de6))
- **use-loading:** rendering fails when used with onMounted, fix [#438](https://github.com/anncwb/vue-vben-admin/issues/438) ([6b99622](https://github.com/anncwb/vue-vben-admin/commit/6b996229e1449b1721ce6797ba6a964850e2e215))
- **useColumn:** fixed table column changes with hidden columns disappearing after dropping ([#453](https://github.com/anncwb/vue-vben-admin/issues/453)) ([f05cc6d](https://github.com/anncwb/vue-vben-admin/commit/f05cc6d34e935c342e1f7ada6692ea0178b7c984))

### Features

- dark mode ([5b8eb4a](https://github.com/anncwb/vue-vben-admin/commit/5b8eb4a49a097a47caf491c44df427522ab58daa))
- **api-select:** add immediate option,close [#430](https://github.com/anncwb/vue-vben-admin/issues/430) ([5b4a41c](https://github.com/anncwb/vue-vben-admin/commit/5b4a41ced412fe3623618791ffa3123a3a2cfcdc))
- **print:** add print example ([2f99892](https://github.com/anncwb/vue-vben-admin/commit/2f99892d96770d550e1cf58e052c40b85efb53c2))
- **tree:** add headerTitle slot ([6bb19fb](https://github.com/anncwb/vue-vben-admin/commit/6bb19fb2d4fa57d8006281d52acd80baaa054b3e))

### Performance Improvements

- code optimization ([37f6660](https://github.com/anncwb/vue-vben-admin/commit/37f6660c574f0cf8b432f66b67062c3bb0314d5c))
- delete tinymce useless style files ([edc7525](https://github.com/anncwb/vue-vben-admin/commit/edc7525103f2e0fd90562b2e30839c11ed62556d))
- refoctor useTitle ([979058a](https://github.com/anncwb/vue-vben-admin/commit/979058ad95d9669cb113033f76b5dafb932aad0f))

## [2.1.1](https://github.com/anncwb/vue-vben-admin/compare/v2.1.0...v2.1.1) (2021-03-25)

### Bug Fixes

- **form:** ensure that the hidden fields of the form are verified properly, fix [#413](https://github.com/anncwb/vue-vben-admin/issues/413) ([237f41d](https://github.com/anncwb/vue-vben-admin/commit/237f41da68592ede236b722157c91f9d7b45db1b))
- **icon:** ensure the menu icon style is correct, fix [#425](https://github.com/anncwb/vue-vben-admin/issues/425) ([5c57a1d](https://github.com/anncwb/vue-vben-admin/commit/5c57a1dda13975c13e65511a39e7483e4a5d3999))
- add route base close [#404](https://github.com/anncwb/vue-vben-admin/issues/404) ([8ad127c](https://github.com/anncwb/vue-vben-admin/commit/8ad127c293872aa10db03044bbc68715dc1b804a))
- ensure permissionMode exists close [#409](https://github.com/anncwb/vue-vben-admin/issues/409) ([8fb0396](https://github.com/anncwb/vue-vben-admin/commit/8fb03961f50051695983f8cb415d6009b9d6b643))
- refresh error ([5bf90ee](https://github.com/anncwb/vue-vben-admin/commit/5bf90eea627638517e3ced024289696a6ece8e74))
- **input-count:** make sure the reset function works close [#381](https://github.com/anncwb/vue-vben-admin/issues/381) ([3c4de9b](https://github.com/anncwb/vue-vben-admin/commit/3c4de9b0be06350f0d9ad97bfb5f7f773c38be38))
- **menu:** ensure the menu has meta attributes close [#397](https://github.com/anncwb/vue-vben-admin/issues/397) ([b2a1951](https://github.com/anncwb/vue-vben-admin/commit/b2a1951fd00433cb5e1c9dce982c53a9c9edd874))
- **menu:** fix the menu disappeared in background mode ([50915c9](https://github.com/anncwb/vue-vben-admin/commit/50915c9754473ba9096b3b1cceedf0d7e7212ad9))
- **menu:** make sure the menu is displayed properly on the small screen close [#336](https://github.com/anncwb/vue-vben-admin/issues/336) ([82c3186](https://github.com/anncwb/vue-vben-admin/commit/82c3186309971517183fc44bfcac159612e48a7b))
- **progress:** fix progress sometimes cannot done ([#388](https://github.com/anncwb/vue-vben-admin/issues/388)) ([8360b1d](https://github.com/anncwb/vue-vben-admin/commit/8360b1d6886b5639cf43da5ab866156d140a0f01))
- **route:** ensure that the first level menu can be hidden ([e2cc5af](https://github.com/anncwb/vue-vben-admin/commit/e2cc5af9375f59d2891be769010ef5d3ccfe9755))
- **table:** ensure that the height calculation is correct close [#395](https://github.com/anncwb/vue-vben-admin/issues/395) ([1d7608e](https://github.com/anncwb/vue-vben-admin/commit/1d7608ee40c27ce81e031947ed6c679cc8b04c77))
- **table:** fix table check column configuration failure close [#391](https://github.com/anncwb/vue-vben-admin/issues/391) ([c3096e2](https://github.com/anncwb/vue-vben-admin/commit/c3096e26ff24c8afd9555e676c898030664846d7))
- **tree:** ensure that the check event is emitted close [#400](https://github.com/anncwb/vue-vben-admin/issues/400) ([16ef134](https://github.com/anncwb/vue-vben-admin/commit/16ef13477c8f06c13ff3611b9e67e430fac433e7))
- ensure the breadcrumb level is correct ([e49072c](https://github.com/anncwb/vue-vben-admin/commit/e49072c31339ba58473ffa883308cc3c2c4c43e9))
- LayoutMap cannot get correctly ([#398](https://github.com/anncwb/vue-vben-admin/issues/398)) ([7c16c2f](https://github.com/anncwb/vue-vben-admin/commit/7c16c2fa9e6cb2e87894666d6687eed3fc744b64))
- welcome page not cached in back-end mode ([#389](https://github.com/anncwb/vue-vben-admin/issues/389)) ([f0b93b5](https://github.com/anncwb/vue-vben-admin/commit/f0b93b50e7b6b9c444f8422f91be73085be8c5fe))
- **v-auth:** ensure the background mode is correct close [#330](https://github.com/anncwb/vue-vben-admin/issues/330) ([67962f1](https://github.com/anncwb/vue-vben-admin/commit/67962f1deea31d695d20ae0ea7fc39b39c1eea47))

### Features

- **route:** add hideChildrenInMenu option close [#346](https://github.com/anncwb/vue-vben-admin/issues/346) ([b67cf22](https://github.com/anncwb/vue-vben-admin/commit/b67cf22dfc8d27428b045f47fcd9e2797b81a81d))
- **table:** add expandAll/collapseAll function close [#333](https://github.com/anncwb/vue-vben-admin/issues/333) ([391da9e](https://github.com/anncwb/vue-vben-admin/commit/391da9ec2884885f9dfe86ddb869ccc0d193491e))

# [2.1.0](https://github.com/anncwb/vue-vben-admin/compare/v2.0.3...v2.1.0) (2021-03-15)

### Bug Fixes

- **button:** fix button style error close [#312](https://github.com/anncwb/vue-vben-admin/issues/312) ([7a6c87f](https://github.com/anncwb/vue-vben-admin/commit/7a6c87f8c1aa34a7a00506fb89fb231e3a176f6f))
- **menu:** fix hideMenu not working close [#338](https://github.com/anncwb/vue-vben-admin/issues/338) ([5b2fbfb](https://github.com/anncwb/vue-vben-admin/commit/5b2fbfb6ce4054ece60c851c45baf60f3a07a4db))
- **page-wraper:** fix PageWrapper the scroll bar on the right side of the content area when the user clicks on the tab page to reload the page ([#341](https://github.com/anncwb/vue-vben-admin/issues/341)) ([fcff2cb](https://github.com/anncwb/vue-vben-admin/commit/fcff2cb1911f1e18017f25b3509d1c67f7e86e81))
- **page-wrapper:** fix PageWrapper title not showing ([9e3adaa](https://github.com/anncwb/vue-vben-admin/commit/9e3adaa30c7cdaf23855922100e16717856ba1d9))
- **table:** ensure that editable cell values are echoed correctly close [#335](https://github.com/anncwb/vue-vben-admin/issues/335) ([fab7a6c](https://github.com/anncwb/vue-vben-admin/commit/fab7a6c58d586300d58e1b6837927e1569b57aa5))
- **table:** ensure that the height calculation is normal close [#349](https://github.com/anncwb/vue-vben-admin/issues/349) ([6095cb5](https://github.com/anncwb/vue-vben-admin/commit/6095cb54afe3f4fcabbfff26ac6704ecfbbddae5))
- **table:** ensure that the table height is correct when the data is empty ([53867a8](https://github.com/anncwb/vue-vben-admin/commit/53867a846154d9a3529f50d20d92ce5fdb41986f))
- **table:** ensure that the value of the table action is updated correctly close [#301](https://github.com/anncwb/vue-vben-admin/issues/301) [#313](https://github.com/anncwb/vue-vben-admin/issues/313) ([7156e47](https://github.com/anncwb/vue-vben-admin/commit/7156e47c1813ec01594d9dff4a1e7d593f3c17db))
- **table:** fix table height calculation problem ([0fe42a0](https://github.com/anncwb/vue-vben-admin/commit/0fe42a06c1f2ef69805dbfeecbcac919ff0aedd0)), closes [#348](https://github.com/anncwb/vue-vben-admin/issues/348)
- **table:** fix table row misalignment close [#353](https://github.com/anncwb/vue-vben-admin/issues/353) ([e15737b](https://github.com/anncwb/vue-vben-admin/commit/e15737b9d17d8ebea4f4e9897aeae9b250910a15))
- **table:** fix TableAction row height error close [#350](https://github.com/anncwb/vue-vben-admin/issues/350) ([a759e44](https://github.com/anncwb/vue-vben-admin/commit/a759e44c6e5c223d2fef52c5a9698e571eed2d52))
- **transition:** fix transition not work close [#334](https://github.com/anncwb/vue-vben-admin/issues/334) ([7d8b8db](https://github.com/anncwb/vue-vben-admin/commit/7d8b8db256f78b228b2b4629a472834a4cce9bd4))
- **tree:** ebsure the expansion is functioning properly close [#362](https://github.com/anncwb/vue-vben-admin/issues/362) ([a405de8](https://github.com/anncwb/vue-vben-admin/commit/a405de8d202710264e802edb270bbd5cd4a1ab80))
- **tree:** tree can customize title close [#344](https://github.com/anncwb/vue-vben-admin/issues/344) ([ed422b7](https://github.com/anncwb/vue-vben-admin/commit/ed422b7c56bf9d44be001b8a54358d69c100ff35))
- **useTableScroll:** query paginationel every time to get the correct height ([#355](https://github.com/anncwb/vue-vben-admin/issues/355)) ([f818bb9](https://github.com/anncwb/vue-vben-admin/commit/f818bb9a107e43adfb8ef2a095635f5fffb5800b))

### Features

- **icon:** added svg icon picker ([1418dc6](https://github.com/anncwb/vue-vben-admin/commit/1418dc6a597a8410711359f07ae66f0fea858977))
- **map:** added AMap/Baidu/Google Map example close [#81](https://github.com/anncwb/vue-vben-admin/issues/81) ([a9462f0](https://github.com/anncwb/vue-vben-admin/commit/a9462f0d4dacb8db9300c416b2d3f094be624220))
- **time:** added time compoennt close [#285](https://github.com/anncwb/vue-vben-admin/issues/285) ([a89eeef](https://github.com/anncwb/vue-vben-admin/commit/a89eeef6f3a0b9863d28cf516b126a938eed7361))

### Performance Improvements

- **icon:** icon and SvgIcon integration ([e8fe6a9](https://github.com/anncwb/vue-vben-admin/commit/e8fe6a929be025a889ddec624ff9c2729313c818))

## [2.0.3](https://github.com/anncwb/vue-vben-admin/compare/v2.0.2...v2.0.3) (2021-03-07)

### Bug Fixes

- **breadcrumb:** ensure that the single-level breadcrumbs jump correctly close [#321](https://github.com/anncwb/vue-vben-admin/issues/321) ([e0dc5cf](https://github.com/anncwb/vue-vben-admin/commit/e0dc5cf2f299fd4c1efdf4f00b9f0f72f07d5937))
- **description:** ensure that props respond ([ce93e46](https://github.com/anncwb/vue-vben-admin/commit/ce93e46faf1d7250dd3acd3fd97ccd6382b2f822))
- **form:** allow the setFieldsValue method to be null or undefined close [#320](https://github.com/anncwb/vue-vben-admin/issues/320) ([8f76ef4](https://github.com/anncwb/vue-vben-admin/commit/8f76ef4e70de58ba5c4497d8b10a036a54a9ac87))
- **form:** ensure that the Form component does not verify hidden form items ([43a45b7](https://github.com/anncwb/vue-vben-admin/commit/43a45b7c996c84f19d00cb9754277b943daf9a10))
- **form:** fix the problem of form props monitoring close [#322](https://github.com/anncwb/vue-vben-admin/issues/322) ([83a3460](https://github.com/anncwb/vue-vben-admin/commit/83a34603562e6358203b834b8feb59b0b44dbbcd))
- **menu:** fix menu icon missing close [#328](https://github.com/anncwb/vue-vben-admin/issues/328) ([d5d4c4b](https://github.com/anncwb/vue-vben-admin/commit/d5d4c4b4136158e061e4a3b6b306af6d4e8cd621))
- **table:** fix pagination error ([745fcfc](https://github.com/anncwb/vue-vben-admin/commit/745fcfc014e3e9e13d6a415a8f094cfef68be908))
- **tree:** fix the logic problem of show attribute of ActionItem under BasicTree ([80b47c8](https://github.com/anncwb/vue-vben-admin/commit/80b47c84cd490388c6db659921f1103c443d7b9d))

### Features

- add SvgIcon component ([9c2a2a0](https://github.com/anncwb/vue-vben-admin/commit/9c2a2a0c00dae6f334c99acc9ab2f571fd8905c0))
- **tree:** add clickRowToExpand option close [#318](https://github.com/anncwb/vue-vben-admin/issues/318) ([e696089](https://github.com/anncwb/vue-vben-admin/commit/e696089660131786ea24632ed75adc57b6ea58f4))

### Performance Improvements

- optimize local loading speed close [#329](https://github.com/anncwb/vue-vben-admin/issues/329) ([491f1fc](https://github.com/anncwb/vue-vben-admin/commit/491f1fcfff17f2297e3fee00e1542778aed08e56))
- **login:** enter to log in ([b93f20f](https://github.com/anncwb/vue-vben-admin/commit/b93f20f0df91689191b8414657171e9f17ba5d68))
- **table:** the table fills the height according to the screen close [#310](https://github.com/anncwb/vue-vben-admin/issues/310) ([551fe50](https://github.com/anncwb/vue-vben-admin/commit/551fe50a44d0b6358cf3861f772ca223ea56f0e2))

## [2.0.2](https://github.com/anncwb/vue-vben-admin/compare/v2.0.0...v2.0.2) (2021-03-03)

### Bug Fixes

- change transition-duration to make animate smoothly ([#294](https://github.com/anncwb/vue-vben-admin/issues/294)) ([5eac9b2](https://github.com/anncwb/vue-vben-admin/commit/5eac9b23d6d8ad91e110169519bfd3ab50f985a9))
- ensure that storage is deleted correctly close [#292](https://github.com/anncwb/vue-vben-admin/issues/292) ([ec7bef7](https://github.com/anncwb/vue-vben-admin/commit/ec7bef792b2a780736c2b1713af3638fa0b69eed))
- ensure that the correct components are dynamically imported ([b476e1c](https://github.com/anncwb/vue-vben-admin/commit/b476e1c84c52dab7030fd19b34ecd33e65fadcb2))
- ensure to request the interface correctly ([11d3f39](https://github.com/anncwb/vue-vben-admin/commit/11d3f395caf7e2268630090eb34f4e5c114a96b7))
- expose tree information in the event close [#315](https://github.com/anncwb/vue-vben-admin/issues/315) ([b6bb816](https://github.com/anncwb/vue-vben-admin/commit/b6bb81630de728c146bf0e559bef88b69d4b8a21))
- fix login page style ([7b4fcd2](https://github.com/anncwb/vue-vben-admin/commit/7b4fcd2ecac8107f7d052dee08cb8007dc5e5dd9))
- improve persistent cache logic ([15567e4](https://github.com/anncwb/vue-vben-admin/commit/15567e478c0f274b0f8f0a7410ea5cb636bacc3d))
- **dashboard:** fix workbench page style ([#280](https://github.com/anncwb/vue-vben-admin/issues/280)) ([7d9b521](https://github.com/anncwb/vue-vben-admin/commit/7d9b521c693b59da5fa28130b5753afa0914e598))
- **image:** fix preview style close [#276](https://github.com/anncwb/vue-vben-admin/issues/276) ([f675fff](https://github.com/anncwb/vue-vben-admin/commit/f675fff2e66054b4157b2a330dbf151822b0befd))
- **login:** fix login style close [#306](https://github.com/anncwb/vue-vben-admin/issues/306) ([a84586e](https://github.com/anncwb/vue-vben-admin/commit/a84586e2f49a2966ac5cb02d945e62e107b247d1))
- **modal:** ensure that the height is correct in the modal full screen state close [#308](https://github.com/anncwb/vue-vben-admin/issues/308) ([37508ca](https://github.com/anncwb/vue-vben-admin/commit/37508ca4113701458cae84fff64062427ba43898))
- **style:** fix anticon style ([e250ad5](https://github.com/anncwb/vue-vben-admin/commit/e250ad567f3169d4ef7baec8954be2e18c6932e6))
- **table:** ensure the table setting button dividing line is hidden ([7c2f851](https://github.com/anncwb/vue-vben-admin/commit/7c2f85169248b369f95c5866ef7e90d4fb1739ef))
- **table:** fix known errors in editable tables close [#267](https://github.com/anncwb/vue-vben-admin/issues/267) ([4f8e1c1](https://github.com/anncwb/vue-vben-admin/commit/4f8e1c1b5ffc78242b300e85be22b1fa07c7d902))
- **table:** get the selected rows of the table correctly ([6013689](https://github.com/anncwb/vue-vben-admin/commit/601368921f075aa1870d1c3ce8f4a8330260206a))
- **watermark:** watermark causes a blank bar ([#297](https://github.com/anncwb/vue-vben-admin/issues/297)) ([66fc1b7](https://github.com/anncwb/vue-vben-admin/commit/66fc1b78450fa7846b0d58e6da5f2135e6456238))

### Features

- added system management sample page ([4628d94](https://github.com/anncwb/vue-vben-admin/commit/4628d94415c1787da8b04499e295967f15c4eef5))
- **icon-picker:** add icon-picker component ([b6cea4a](https://github.com/anncwb/vue-vben-admin/commit/b6cea4a950e92a0f91e06bcc60b4653e1d2709ef))
- **moda;:** can switch full screen by double-clicking on the head close [#277](https://github.com/anncwb/vue-vben-admin/issues/277) ([e3851dc](https://github.com/anncwb/vue-vben-admin/commit/e3851dc5ea290ef6eb4d12ce2469311b1bee53cd))
- **tree:** actionItem added show attribute close [#314](https://github.com/anncwb/vue-vben-admin/issues/314) ([8b62fa0](https://github.com/anncwb/vue-vben-admin/commit/8b62fa0cb0559ec3ea8a1b82a2d44165b2337522))
- **tree:** add renderIcon props close [#309](https://github.com/anncwb/vue-vben-admin/issues/309) ([72b42d7](https://github.com/anncwb/vue-vben-admin/commit/72b42d7b3539919a9baa4f1a7316842f85991c1e))
- **ws:** added WebSocket examples and service scripts ([c625462](https://github.com/anncwb/vue-vben-admin/commit/c625462e98eec006aaeeef14280775cafeb72364))
- add dept management page ([3b8ca42](https://github.com/anncwb/vue-vben-admin/commit/3b8ca420c763fe0e386a8dbc023f4f8eb8742252))
- added settingButtonPosition configuration close [#275](https://github.com/anncwb/vue-vben-admin/issues/275) ([da04913](https://github.com/anncwb/vue-vben-admin/commit/da04913ef324fff122732b445c1b1d1d662b87a3))
- axios supports form-data format requests ([c41fa75](https://github.com/anncwb/vue-vben-admin/commit/c41fa75265beb00f629dcda808957cb58b905bc2))

### Performance Improvements

- **tree:** strengthen BasicTree function ([cd8e924](https://github.com/anncwb/vue-vben-admin/commit/cd8e924d4641fc46cacd4a934478d8861e8c3c04))
- hide table full screen button by default ([500900a](https://github.com/anncwb/vue-vben-admin/commit/500900abe16d3e27e1c9e0446a13386c6129d449))
- imporve axios logic ([a821d9a](https://github.com/anncwb/vue-vben-admin/commit/a821d9a3a279f0e6a5b7dbb316725d603ce30f74))
- improve login logic ([a09a0ee](https://github.com/anncwb/vue-vben-admin/commit/a09a0eedd29fdc9a9bd5414bd12c08e37c72982a))
- improve persistent logic ([f57eb94](https://github.com/anncwb/vue-vben-admin/commit/f57eb944edfd967f5f45566ec5bedbf12f147492))
- move src/types to root ([fcee7d4](https://github.com/anncwb/vue-vben-admin/commit/fcee7d4eb71471dd40567c8d7c97302eeee80697))
- remove useless code ([be3a3ed](https://github.com/anncwb/vue-vben-admin/commit/be3a3ed699f73d352d49623ef07288093a3332c4))
- replace crypto-es with crypto-js ([bba7768](https://github.com/anncwb/vue-vben-admin/commit/bba7768759c5d4dedd6599417154c4cb8ab64920))

## (破坏性更新) Breaking changes

- 将项目`windicss`改为`tailwindcss`，解决内存溢出问题
  - 目前项目不兼容地方有
    - `!xl:m-4` 之类的写法需要改为`xl:!m-4`,注意只有`!`这个不兼容，没用到则不用改
    - `windicss`自身新增的特性需要调整，比如`Attribute`模式不兼容

### ✨ Refactor

- 移除`useExpose`,使用组件自身提供的`expose`代替

### ⚡ Performance Improvements

- **Locale** 合并多语言文件，减少文件数量
- **Utils** Mitt 默认导出由 `Class` 改为 `Function`
- **Axios** `isTransformRequestResult`更名为`isTransformResponse`

### ✨ Features

- **CropperImage** `Cropper` 头像裁剪新增圆形裁剪功能
- **CropperAvatar** 新增头像上传组件
- **Drawer** `useDrawer`新增`closeDrawer`函数
- **Preview** 新增`createImgPreview`图片预览函数
- **Setup** 新增引导页示例
- **Tests** 添加 jest 测试套件，暂不支持 Vue 组件单测
- **Axios** 新增`authenticationScheme`配置，用于指定认证方案
- **Setting** 新增 `sessionTimeoutProcessing` 项目配置项，用于配置会话超时如何处理

### 🐛 Bug Fixes

- **Modal** 修复全屏高度计算错误
- **Modal** 修复关闭事件触发多次问题
- **PageWrapper** 修复高度计算问题
- **FlowChart** 修复拖放菜单丢失
- 修复后台模式下，Iframe 路由错误
- **PageWrapper** 修复 footer 与全局页脚同时开启时的高度计算问题
- **Menu** 修复菜单折叠动画抖动问题
- **Store**修复 pinia 版本升级之后类型错误

## 2.4.2(2021-06-10)

### ✨ Refactor

- `CountTo`组件重构

### ✨ Features

- `radioButtonGroup` 支持`boolean`值
- `useModalInner` 新增 `redoModalHeight`用于在 Modal 内部重设`Modal`高度
- `useECharts` 新增`getInstance`用于获取`echart`实例
- `TableAction` 新增 `stopButtonPropagation` 阻止操作按钮点击事件冒泡
- `BasicTable` 在行编辑模式下，可以获取或设置其它处于列的编辑组件的值
- `ApiSelect` 组件在`params`改变后会自动重新`fetch`数据
- `TableImg` 组件改进
- `BasicTable` 新增 `columns-change` 事件用于监听用户改变列排序、展示、固定状态
- `Tinymce`支持动态修改 readonly
- `BasicTable`新增`updateTableDataRecord`方法用于更新指定行数据
- `useModal`新增`closeModal`方法用于关闭`Modal`

### 🐛 Bug Fixes

- 修复`redoModalHeight`不能减小高度的问题
- 修复 `BasicForm`设置 schemas 数据不生效的问题
- 修复多标签可能导致`KeepAlive`失效的问题
- 修复默认的`axios`拦截器不能处理自定义 code 的问题
- 修复锁屏弹窗的高度问题
- 修复`BaiscTable`的`列展示`复选框的半选状态显示不正确的问题
- 修复`BasicUpload`组件的预览列表某些情况下不能显示的问题
- 修复`RadioButtonGroup`的`options`设置`disabled`不生效的问题
- 修复`Tinymce`组件在只读模式下上传图片的按钮仍然可用的问题
- 修复`BasicForm`特定情况下的卡顿问题
- 修复"目录"路由不起作用的问题

## 2.4.1(2021-06-01)

### ✨ Features

- 可编辑表格新增`DatePicker`和`TimePicker`组件
- `Tree` 组件新增`defaultExpandLevel`配置

### ⚡ Performance Improvements

- 菜单搜索默认聚焦

### 🐛 Bug Fixes

- 修复`CodeEditor`已知问题
- 修复`i18n`控制台警告问题
- 修复可编辑表格`align`配置不生效问题
- 确保`axios`只对`Object`参数进行处理
- 修复`Tree`组件 `defaultExpandAll` 配置失效
- 修复`TableAction` 分割线丢失问题
- 修复表格已知问题
- 修复首次加载或改变语言导致重载时，不会设置 HTML 的 lang 属性

## 2.4.0 (2021-05-25)

### ✨ Features

- 新增图形编辑器示例
- 新增代码编辑器(包含 Json 编辑器)
- 新增 `JsonPreview`Json 数据查看组件
- 表格的数据列(column)和操作列(actionColumn)的字段可以根据权限和业务来控制是否显示
- 新增权限控制表格示例(AuthColumn.vue)
- 新增用户登录过期示例

### ⚡ Performance Improvements

- 合并部分语言文件，减少文件数量

### 🐛 Bug Fixes

- 修复黑暗主题刷新闪烁的白屏
- 修复标签页关闭其他功能失效问题
- 修复表单已知问题
- 修复自动锁屏失效

## 2.3.0 (2021-04-10)

## (破坏性更新) Breaking changes

- 使用 `pinia` 替换 `vuex`,`vuex-module-decorators`。

  - 影响，之前如果有自己使用 vuex-module-decorators，需要改造为 pinia。
  - 原因：
    - pinia 于 vuex5api 基本类似，且简单易懂。
    - 后续切换 vuex5 成本非常低，也可以当作第三方状态管理库使用

- 移除 `useKeyPress` 使用`vueuse`-`onKeyStroke`代替
- 移除 `useDebounceFn` 使用`vueuse`-`useDebounceFn`代替
- 移除 `useThrottle` 使用`vueuse`-`useThrottleFn`代替

### ✨ Features

- 标签页支持持久化保存

### ✨ Refactor

- 移除 `useElResize`

### 🐛 Bug Fixes

- 登录页样式修复
- 修复菜单已知问题
- 修复主题样式切换问题

## 2.2.0 (2021-04-06)

### ✨ Features

- 新增`headerTitle` slot
- 新增打印示例
- 新增关于界面

### ✨ Refactor

- 移除 useFullScreen 函数
- tinymce 由 Cdn 改为 npm(打包体积偏大)
- Dashboard 重构
- 移除 ApexCharts 及示例

### 🐛 Bug Fixes

- 确保面包屑正确的显示图标
- 修复 tinymce 上传按钮全屏模式下消失问题
- 确保 title 在重新登录后正常改变
- 确保后台模式登录正常
- 修复 TableAction 点击事件问题

## 2.1.1 (2021-03-26)

### ✨ Features

- 路由新增 hideChildrenInMenu 配置。用于隐藏子菜单
- 树形表格内置展开/折叠全部函数

### ✨ Refactor

- 重构路由多层模式,解决嵌套 keepalive 执行多次问题

### 🐛 Bug Fixes

- 确保 CountDownInput 组件重置清空值
- 修复分割模式下在小屏幕中显示问题
- 修复表格高度计算问题
- 修复后台路由获取不到组件问题
- 修复 Modal 组件 loadingTip 配置不生效
- 修复后台权限指令不生效
- 确保 progress 进度条正确关闭
- 修复表格勾选列配置失效问题
- 确保一级菜单可以被隐藏
- 确保表单隐藏字段校验正常

### 🎫 Chores

- 移除 ls-lint

## 2.1.0 (2021-03-15)

### ✨ Features

- 图标选择器新增 svg 模式
- 新增时间组件
- 新增高德/百度/谷歌地图示例

### ✨ Refactor

- 重构项目以解决循环依赖项导致的热更新问题
- 移除 vueHelper/useClickoutside,使用@vueuse/core 代替

### 🐛 Bug Fixes

- 确保 `table action` 的值被正确更新
- 修复页面切换的动画无法关闭
- 修复`PageWrapper`title 不显示
- 修复表格已知问题
- 修复 BasicTree 组件不能自定义 title 问题
- 修复主题切换后按钮样式问题

## 2.0.3 (2021-03-07)

### ✨ Features

- `BasicTree` 新增`clickRowToExpand`,用于单击树节点展开
- 新增 SvgIcon 插件及示例
- 账号管理界面增加左侧部门树·

### ⚡ Performance Improvements

- 表格关闭分页时不再携带分页参数
- 登录页监听回车事件进行登录
- 当表格设置自适应大小时,根据屏幕来铺满了高度.
- Tree 滚动条优化
- 优化本地开发加载速度

### 🐛 Bug Fixes

- 修复`Description`已知问题
- 修复`BasicForm`已知问题
- 修复`BasicTree`下 ActionItem 的 show 属性逻辑问题
- 修复树组件 demo 示例样式错误
- 修复账号管理新增未清空旧数据
- form 组件应允许 setFieldsValue 方法值为 null 或者 undefined
- 确保单级面包屑正确跳转
- 确保 Form 组件不校验隐藏的表单项

## 2.0.2 (2021-03-04)

### ✨ Refactor

- 重构多语言模块,支持懒加载及远程加载

### ✨ Features

- axios 支持 form-data 格式请求
- 新增图标选择器组件(支持本地和在线方式)
- 新增 WebSocket 示例和服务脚本
- Tree 组件新增 `renderIcon` 属性用于控制层级图标显示
- Tree->actionItem 新增 show 属性，用于动态控制按钮显示
- Tree 新增工具栏/title/搜索功能
- 新增部门管理/修改密码/账号管理/角色管理/菜单管理示例界面

### ⚡ Performance Improvements

- 登录界面动画优化
- 修复 github 仓库体积过大问题.
- 默认隐藏表格全屏按钮
- `crypto-es`改为`crypto-js`，减小打包体积
- `types`目录移动到根目录,兼容其他目录全局类型

### 🐛 Bug Fixes

- 修复验证码组件警告问题
- 修复表格不能正确的获取选中行
- 修复全屏状态下 modal 高度计算错误
- 修复部分表格样式问题
- 修复树形表格 `indentSize`设置失效

## 2.0.1 (2021-02-21)

### ✨ Refactor

- 登录页重构,新增注册页面/重置密码页面/手机登录/二维码登录

### ✨ Features

- 新增 `settingButtonPosition`配置项,用于配置`设置`按钮位置
- `modal`可以通过双击头部切换全屏
- 新增`CountDownInput`组件

### ⚡ Performance Improvements

- 优化可编辑居中样式及下拉框宽度过短
- 表格新增编辑时`edit-change`事件监听

### 🐛 Bug Fixes

- 修复图片预览样式错误
- 修复图标样式问题
- 修复可编辑表格下拉回显问题

## 2.0.0 (2021-02-18)

## (破坏性更新) Breaking changes

- `echarts` 升级到 5.0,并且进行按需引入(只需使用 `useECharts` 即可).

### ✨ Refactor

- 移除`global.less`,`mixin.less`,`design/helper`,由`windicss`代替,有用到的需要修改对应的样式

### ✨ Features

- useModal 新增返回值函数 `redoModalHeight`,用于在 modal 内为动态内容时刷新 modal 高度
- 升级 husky 到 5.0
- 新增 `brotli`|`gzip`压缩及相关测试命令
- 重新引入 `windicss` (与`tailwind`一样).在速度上更快

### ⚡ Performance Improvements

- 调整获取用户信息接口返回值为数组格式
- 将 error-log 列表固定为系统路由

### 🐛 Bug Fixes

- 修复 Upload 组件 maxNumber 失效问题
- 修复打包 sourcemap 报错
- 修复代码 debugger 位置显示错误
- 修复 mock 插件 post 请求错误问题
- 修复部分主题颜色值错误
- 修复表格在可编辑行状态回车确认

### 🎫 Chores

- 文档更新
- 升级 ant-design-vue 到 `2.0.0`
- 升级 vite 到 `2.0.0`

## 2.0.0-rc.18 (2021-02-05)

### ✨ Features

- `ApiSelect`新增 `numberToString`属性,用于将 value 为`number`的值全部转化为`string`
- 新增主题色切换
- 打包图片压缩

### ⚡ Performance Improvements

当不使用 mock 时,将 `mock.js` 移出打包文件

### 🐛 Bug Fixes

- 修复 modal 高度计算错误
- 修复菜单折叠状态下点击标签页弹出菜单
- 修复 form 表单初始化值为 0 问题
- 修复表格换行问题
- 修复菜单外链不跳转
- 修复菜单顶部显示问题
- 修复`modifyVars`配置失效问题

## 2.0.0-rc.17 (2021-01-18)

### ✨ Refactor

- 新增 `SimpleMenu`组件替代左侧菜单组件(顶部菜单没有替换,功能尽量做到简单不卡)。解决菜单卡顿问题。
- `ant-design-vue`组件不再全局注册。以便于更好配合 css 按需引入。如果需要全局注册,需要自己加

### ✨ Features

- `css` 按需引入

### 🐛 Bug Fixes

- 修复 `TableAction`图标问题
- 修复菜单折叠按钮丢失问题
- 修复菜单相关问题
- 修复 moment 多语言问题

## 2.0.0-rc.16 (2021-01-12)

### ✨ Refactor

- 独立组件配置到 `/@/settings/componentsSetting`
- `colorSetting`和`designSetting`现在合并为`designSetting`
- `ant-design-vue`组件注册移动到`components/registerComponent`
- 移除 `setup` 文件夹
- 升级到`vite2`
- 图片预览改为`Image`组件实现,暂时移除函数式使用方式

### ✨ Features

- 新增`mixSideTrigger`配置。用于配置左侧混合模式菜单打开方式。可选`hover`,默认`click`
- 新增`mixSideFixed`配置。用于固定左侧混合模式菜单
- modal 组件新增`height`和`min-height`属性
- 新增`PageWrapper`组件。并应用于示例页面
- 新增标签页折叠功能
- 兼容旧版浏览器
- tinymce 新增图片上传

### 🐛 Bug Fixes

- 修复表格列配置已知问题
- 恢复 table 的`isTreeTable`属性
- 修复表格内存溢出问题
- 修复`layout` 收缩展开功能在分割模式下失效
- 修复 modal 高度计算错误
- 修复文件上传错误
- 修复表格已知问题

### 🎫 Chores

- 文档更新

## 2.0.0-rc.15 (2020-12-31)

### ✨ 表格破坏性更新

- 重构了可编辑单元格及可编辑行。具体看示例。写法已改变。针对可编辑表格。

- 表格编辑支持表单校验

- 在表格列配置增加了以下配置

```bash
{

  # 默认是否显示列。不显示的可以在列配置打开
  defaultHidden?: boolean;
  # 列头右侧帮助文本
  helpMessage?: string | string[];
  # 自定义格式化 单元格内容。 支持时间/枚举自动转化
  format?: CellFormat;

  # Editable
  # 是否是可编辑单元格
  edit?: boolean;
  # 是否是可编辑行
  editRow?: boolean;
  # 编辑状态。
  editable?: boolean;
  #  编辑组件
  editComponent?: ComponentType;
  # 所对应组件的参数
  editComponentProps?: Recordable;
  # 校验
  editRule?: boolean | ((text: string, record: Recordable) => Promise<string>);
  # 值枚举转化
  editValueMap?: (value: any) => string;
  # 触发编辑正航
  record.onEditRow?: () => void;
}

```

### ✨ 表格重构

- 新增`clickToRowSelect`属性。用于控制点击行是否选中勾选框
- 监听行点击事件
- 表格列配置按钮增加 列拖拽，列固定功能。
- 表格列配置新增`defaultHidden` 属性。用于默认隐藏。可在表格列配置勾选显示
- 更强大的列配置
- useTable:支持动态改变参数。可以传入`Ref`类型与`Computed`类型进行动态更改
- useTable:新增返回 `getForm`函数。可以用于操作表格内的表单
- 修复表格已知的问题

### ✨ Features

- 新增 `v-ripple`水波纹指令
- 新增左侧菜单混合模式
- 新增 markdown 嵌入表单内示例
- 新增主框架外页面示例
- `route.meta` 新增`currentActiveMenu`,`hideTab`,`hideMenu`参数 用于控制详情页面包屑级菜单显示隐藏。
- 新增面包屑导航示例
- form: 新增`suffix`属性，用于配置后缀内容
- form: 新增远程下拉`ApiSelect`及示例
- form: 新增`autoFocusFirstItem`配置。用于配置是否聚焦表单第一个输入框
- useForm: 支持动态改变参数。可以传入`Ref`类型与`Computed`类型进行动态更改

### ⚡ Performance Improvements

- 优化`modal`与`drawer`滚动条组件
- table: 移除 `isTreeTable`属性
- 全局引入`less`文件。无需手动在组件再次引入

### 🎫 Chores

- 升级`ant-design-vue`到`2.0.0-rc.7`
- 升级`vue`到`3.0.5`

### 🐛 Bug Fixes

- 修复混合模式下滚动条丢失问题
- 修复环境变量配置失效以及 history 模式下 logo 地址问题
- 修复图表库切换页面导致宽高计算错误
- 修复多语言配置 `Locale.show`导致配置不生效
- 修复路由类型错误
- 修复菜单分割时权限失效问题
- 关闭多标签页时 iframe 提前加载
- 修复`modal`与`drawer`已知问题
- 修复左侧菜单混合模式适配问题

## 2.0.0-rc.14 (2020-12-15)

### ✨ Features

- 移除左侧菜单搜索，新增顶部菜单搜索功能
- layout 移动端适配。业务页面未适配
- axios 加入 joinTime 配置。控制响应是否加入时间戳

### ⚡ Performance Improvements

- 异步引入组件
- 优化整体结构
- 替换菜单默认滚动条为滚动组件
- 菜单性能优化

### 🎫 Chores

- 返回顶部样式调整,避免遮住其他元素
- 升级`ant-design-vue`到`2.0.0-rc.5`
- 刷新按钮布局调整
- `route.meta` 移除 `externalLink` 属性

### ✨ Refactor

- `openModal`与`openDrawer`第三个参数`openOnSet`默认设置为 true

### 🐛 Bug Fixes

- 修复多级路由缓存导致组件渲染多次的问题
- 修复地图图表切换后消失问题
- 修复登录成功 notify 消失问题
- 修改 `VirtualScroll`和`ImportExcel`组件名为`VScroll`与`ImpExcel`,暂时解决含有关键字的组件在 vue 模版内使用内存溢出
- 修复 axios 大小写问题
- 修复按钮样式问题
- 修复菜单分割模式问题
- 修复 `Modal`与`Drawer`组件在使用 emits 数据传递失效问题
- 修复菜单已知问题
- 修复上传组件 api 失效问题
- 修复菜单权限过滤失效问题

## 2.0.0-rc.13 (2020-12-10)

## (破坏性更新) Breaking changes

- 路由重构, 不再支持以前的格式。改为支持 vue-router 最初的默认结构，具体格式可以参考示例更改。实现多级路由缓存，不再将路由转化为 2 级。
- 重构面包屑，使用 antd 的面包屑组件。之前的组件已删除

### ✨ Features

- 还原 antdv 默认 loading，重构 `Loading` 组件，增加`useLoading`和`v-loading`指令。并增加示例
- i18n 支持 vscode `i18n-ally`插件
- 新增多级路由缓存示例
- 打包代码拆分(试验)
- 提取上传地址到全局变量，打包可以动态配置

### ✨ Refactor

- tree 组件 ref 函数调用删除 `$`
- 锁屏界面重构美化，删除不必要的背景图片

### ⚡ Performance Improvements

- 页面切换 loading 逻辑修改。对于已经加载过的页面不管有没有关闭,再次打开不会在显示 loading(已经打开过的页面再次打开速度比较快,可以不需要 loading,同理顶部进度条逻辑也一样)，刷新后恢复。

### 🎫 Chores

- 首屏 loading 修改
- 升级`vue`到`3.0.4`
- 升级`ant-design-vue`到`2.0.0-rc.3`
- 重新引入`vueuse`
- 移除 route meta 内的`afterCloseLoading`属性
- 文档更新

### 🐛 Bug Fixes

- 修复表格 i18n 错误
- 修复菜单图标大小不一致
- 修复顶部菜单宽度计算问题
- 修复表格 tabSetting 问题
- 修复文件上传删除失效
- 修复表格行编辑保存错误问题

## 2.0.0-rc.12 (2020-11-30)

## (破坏性更新) Breaking changes

- ClickOutSide 组件引入方式由 `import ClickOutSide from '/@/components/ClickOutSide/index.vue'`变更为`import { ClickOutSide } from '/@/components/ClickOutSide'`
- Button 组件引入方式由 `import Button from '/@/components/Button/index.vue'`变更为`import { Button } from '/@/components/Button'`
- StrengthMeter 组件引入方式由 `import StrengthMeter from '/@/components/StrengthMeter'`变更为`import { StrengthMeter } from '/@/components/StrengthMeter'`
- 除示例外加入全局国际化功能，支持中文与英文

### ✨ Refactor

- 重构整体 layout。更改代码实现方式。代码更精简
- 配置项重构
- 移除 messageSetting 配置
- BasicTitle 组件 `showSpan`=> `span`

### ✨ Features

- 缓存可以配置是否加密,默认生产环境开启 Aes 加密
- 新增标签页拖拽排序
- 新增 LayoutFooter.默认显示，可以在配置内关闭

### ⚡ Performance Improvements

- 优化`Modal`组件全屏动画不流畅问题

### 🐛 Bug Fixes

- tree: 修复文本超出挡住操作按钮问题
- useRedo: 修复通过 useRedo 刷新页面参数丢失问题
- form: 修复表单校验先设置在校验及控制台错误信息问题
- `modal`&`drawer` 修复组件传递数组参数问题
- form: 修复`updateSchema`赋值含有`[]`时不生效
- table: 修复表格 `TableAction` 图标显示问题
- table: 修复表格列设置通过`setColumns`设置不显示

### 🎫 Chores

- 更新 antdv 到`2.0.0-rc.2`
- 更新 vue 到`3.0.3`
- 更新 vite 到`1.0.0.rc13`
- 暂时删除 `@vueuse/core`.等稳定后在集成。目前不太稳定。

## 2.0.0-rc.11 (2020-11-18)

### ✨ Features

- 新增 base64 文件流下载
- 优化上传组件及示例
- 新增可编辑行示例
- 新增个人页
- 新增表单页
- 新增详情页
- 将上传组件默认集成到 form

### 🎫 Chores

- 更新 antdv 到`2.0.0-rc.1`（暂时还原到 beta15,rc1 菜单卡顿太严重.）
- 添加部分注释

### ✨ Refactor

- 移除`useModal`与`useDrawer`的`receiveDrawerDataRef`和`transferDrawerData`属性
- `useModal`与`useDrawer`对应的`openModal`与`openDrawer`扩展第三个参数。用于再次打开触发回调

### 🐛 Bug Fixes

- 修复表单 inputNumber 校验错误
- 修复表单默认值设置错误
- 修复菜单折叠按钮隐藏时占位问题
- 修复表单 baseColProps 不生效

## 2.0.0-rc.10 (2020-11-13)

### ✨ Refactor

- 重构 hook,引入 `@vueuse`，删除其中已有的`hook`,优化现有的 hook
- `useEvent` 更名->`useEventListener`
- 表单`ComponentType`删除 `SelectOptGroup`,`SelectOption`,`Transfer`,`Radio`,四个类型。修改`RadioButtonGroup`组件

### ✨ Features

- 表单项的`componentsProps`支持函数类型
- 菜单新增 tag 显示，支持 4 中类型颜色及 dot 圆点显示
- 新增菜单及顶栏颜色选择配色
- 增加示例结果页
- 新增文件下载示例

### ⚡ Wip

- 上传组件(未完成，测试中...)

### ⚡ Performance Improvements

- 优化 settingDrawer 代码
- 优化多标签页切换速度
- 增加表单自定义及动态能力

### 🐛 Bug Fixes

- 修复多个富文本编辑器只显示一个
- 修复登录过期后重新登录未跳转原来页面的
- 修复 window 系统动态引入错误
- 修复页面类型错误
- 修复表单 switch 和 checkBox 单独使用报错

## 2.0.0-rc.9 (2020-11-9)

### ✨ Features

- 菜单 trigger 可以选择位置
- 增加富文本嵌入表单的示例
- 表单组件 schema 增加 `required`属性。简化配置
- openModal 和 openDrawer 第二个参数可以代替`transferModalData`传参到内部
- 带参路由可以被缓存

### ✨ Refactor

- 重构由后台生成菜单的逻辑
- Route Module 结构改造

### ⚡ Performance Improvements

- 菜单性能继续优化,更流畅
- 优化懒加载组件及示例
- layout 样式微调

### 🎫 Chores

- 删除菜单背景图
- 更新`ant-design-vue`版本为`beta15`
- 更新`vite`版本为`rc.9`
- 异常页调整
- `BasicTitle` 色块默认不显示

### 🐛 Bug Fixes

- 修复升级之后 table 类型问题
- 修复分割菜单且左侧菜单没有数据时候，继续展示上一次子菜单的问题
- 修复`useMessage`类型问题
- 修复表单项设置`disabled`不生效问题
- 修复`useECharts`在`resize`时不能自适应,报错
- 修复`useWatermark`在清空后`resize`未删除
- 修复表单校验问题
- 修复多级表头配置不生效问题

## 2.0.0-rc.8 (2020-11-2)

### ✨ Features

- 全局 loading 添加文本
- 右键菜单支持多级

### 🎫 Chores

- 登录缓存从 sessionStorage 改为 LocalStorage

### ⚡ Performance Improvements

- 更新`ant-design-vue`到`beta.12`
- Layout 界面布局样式调整
- 优化懒加载组件
- 优化表格渲染性能
- 表单折叠搜索添图标添加动画
- routeModule 可以忽略 layout 配置不写。方便配置一级菜单

### 🐛 Bug Fixes

- 修复表格类型错误
- 修复 mock 分页工具错误
- 修复表格开启搜索表单折叠问题
- 修复表格 size 为 samll 时候，fixed 列样式问题
- 修复多标签页关闭报错问题
- 修复 message 类型错误

## 2.0.0-rc.7 (2020-10-31)

### ✨ Features

- 表单组件现在支持直接传入 model 直接进行 set 操作，参考**组件->弹窗扩展->打开弹窗并传递数据**

- modal 的 useModalInner 现在支持传入回调函数，用于接收外部`transferModalData`传进来的值，

  - 用于处理打开弹窗对表单等组件的设置值。参考**组件->弹窗扩展->打开弹窗并传递数据**
  - `receiveModalDataRef`这个值暂时保留。尽量少用。后续可能会删除。

- drawer 的 useDrawerInner 现在支持传入回调函数，用于接收外部`transferModalData`传进来的值，
  - 用于处理打开抽屉对表单等组件的设置值。参考**组件->抽屉扩展->打开抽屉并传递数据**
  - `receiveModalDataRef`这个值暂时保留。尽量少用。后续可能会删除。

### ✨ Refactor

- 表单代码优化重构

### ⚡ Performance Improvements

- Modal slot 可以覆盖
- 优化表格嵌入高度计算问题

### 🎫 Chores

- 添加部分注释
- pwa 图标补充
- types 类型调整
- 升级`ant-design-vue`到`beta.11`,并修改带来的已知问题,部分问题发现后在解决

### 🐛 Bug Fixes

- 修复本地代理 post 接口到 https 地址超时错误
- 修复 modal 在不显示 footer 的时候全屏高度计算问题
- 修复表单重置未删除校验信息错误
- 修复顶部菜单分割模式样式问题
- 修复表格展开图标动画失效

## 2.0.0-rc.6 (2020-10-28)

### ✨ Features

- 新增`pwa`功能，可在`.env.production`开启
- Button 组件扩展 `preIcon`和`postIcon`属性用于在文本前后添加图标
- 恢复面包屑显示图标功能

### 🎫 Chores

- 升级 vite 版本为`v1.0.0.rc8`
- vite.config.ts 内部 plugins 抽取
- build 目录结构调整
- 依赖更新
- 文档更新
- 修改默认路由切换动画

### ⚡ Performance Improvements

- `setTitle`逻辑调整
- 将系统用到的 sessionStorage 及 LocalStorage 缓存设置默认 `7` 天过期

### ✨ Refactor

- 独立出`vite-plugin-html`,并修改相关插入 html 的逻辑

### 🐛 Bug Fixes

- 修复热更新时多次注册组件警告问题
- 修复登录后出现登录标签页
- 修复路由切换参数消失问题
- 修复 useMessage 图标样式问题

## 2.0.0-rc.5 (2020-10-26)

### ✨ Features

- 更新组件文档
- 面包屑支持显示图标
- 新增 tinymce 富文本组件
- 表单新增 submitOnReset 控制是否在重置时重新发起请求
- 表格新增`sortFn`支持自定义排序
- 新增动画组件及示例
- 新增懒加载/延时加载组件及示例

### ✨ Refactor

- Drawer 组件的 detailType 修改为 isDetail

### 🎫 Chores

- 删除代码内的可选链语法
- 表单重置逻辑修改
- 关闭多标签页 tabs 动画
- 升级 vite 版本为`v1.0.0.rc6`
- 删除中文路径警告。rc6 已修复

### 🐛 Bug Fixes

- 修复抽屉组件自动高度及显示 footer 显示问题
- 修复表单查询后重置回默认值
- 修复菜单没有子节点时显示折叠的问题
- 修复面包屑显示样式问题
- 修复 modal 在 destroyOnClose=true 时多次打开拖拽失效
- 修复表格出现多个 action 列

# 2.0.0-rc.4 (2020-10-21)

### ✨ Features

- 表格新增配置工具栏
- 新增消息通知模块

### 🎫 Chores

- 表格默认不显示边框
- 依赖更新
- 更新 vue 为`v3.0.2`
- 界面样式微调

### ⚡ Performance Improvements

- 优化首屏体积大小
- 优化 TableAction 组件
- 减小菜单折叠宽度

### 🐛 Bug Fixes

- 修复一级菜单折叠显示菜单名问题
- 修复预览命令不打包问题
- 修复表格 actionColOptions 参数不生效问题
- 修复表格刷新表单 loading 不生效问题
- 修复带参界面刷新参数丢失问题

# 2.0.0-rc.3 (2020-10-19)

### ✨ Features

- 新增 excel 组件及 excel/xml/csv/html 导出示例
- 新增 excel 导入示例
- 新增全局错误处理
- 新增 markdown 组件及示例
- 新增折叠菜单时可显示菜单名

### Docs

- 添加项目文档

### 🎫 Chores

- 升级依赖
- 其他细节优化

### 🐛 Bug Fixes

- 修复顶部菜单自适应问题
- 修复 window 系统打包报错问题

# 2.0.0-rc.2 (2020-10-17)

### ✨ Features

- 打包可以配置输出`gizp`
- 打包可以配置删除`console`
- 路由及菜单不需要在手动引入，改为自动引入

### 🎫 Chores

- 升级 vue 到`3.0.1`
- 将`vite`版本改为每日构建版本

### 🐛 Bug Fixes

- 修复菜单报错
- 修复表格自适应高度问题
- 修复`window系统`执行 script 报错问题
- 修复折叠组件问题

### ⚡ Performance Improvements

- 删除菜单最小化背景
- 阻止页面刷新重新渲染菜单
- 其他一些细节优化

# 2.0.0-rc.1 (2020-10-14)

### ✨ Features

- 添加带参 tab

### ⚡ Performance Improvements

- 菜单折叠优化
- 页面细节优化
- 打包后压缩 html
- 预览组件及右键菜单函数化重构
- 预览组件操作列居中

### 🎫 Chores

- 更新依赖
- 添加`README.en-US.md`
- 添加`CHANGELOG.en-US.md`

### 🐛 Bug Fixes

- 修复页面刷新跳转到登陆页

# 2.0.0-beta.7 (2020-10-12)

### ⚡ Performance Improvements

- 现有的选项卡切换不再显示动画和和进度条

### ✨ Features

- 新增 `CountTo`组件及示例 demo
- 项目配置文件新增 `closeMessageOnSwitch`和`removeAllHttpPending`
- 生产环境独立出配置文件，用于动态配置项目配置
- 新增 `useEcharts`和`useApexChart`来方便图表使用，同时新增相关 demo
- 新增工作台界面
- 新增分析页界面

### 🎫 Chores

- 更新依赖

### 🐛 Bug Fixes

- 修复路由切换，tab 未激活问题

# 2.0.0-beta.56 (2020-10-11)

### 💄 Styles

- 菜单样式调整

### 🐛 Bug Fixes

- 修复可编辑表格不能输入问题
- 修复打包报错，生产环境不需要设计 proxy

### ⚡ Performance Improvements

- 优化多标签页切换速度
- 首屏加载动画

# 2.0.0-beta.5 (2020-10-10)

### ♻ Code Refactoring

- 删除`tailwind css`

### ⚡ Performance Improvements

- 优化页面切换速度

### 🎫 Chores

- 添加 `.vscode`和`.github`配置
- 更改菜单图标
- 新增`.env`配置文件
- 更新 readme.md

### 🐛 Bug Fixes

- 修复`Tree`组件勾选事件失效问题

# 2.0.0-beta.4 (2020-10-08)

### 🎫 Chores

- 删除多余依赖

### 🐛 Bug Fixes

- 修复页面刷新空白
- 修复表格在生产环境样式失效

# 2.0.0-beta.3 (2020-10-07)

### ✨ Features

- 项目配置文件新增`openNProgress`用于控制是否开启顶部控制条
- 添加`table`组件及 demo

### 🎫 Chores

- 添加` github workflows`

# 2.0.0-beta.2 (2020-10-07)

### ✨ Features

- 新增图片预览组件

### 🔧 Continuous Integration

- 增加 githubAction 脚本

# 2.0.0-beta.1(2020-09-30)

### 🎫 Chores

- 从 1.0 迁移部分代码
- 添加 README.md 描述文件

### 🐛 Bug Fixes

- 修复表单，动画及打包失败问题
