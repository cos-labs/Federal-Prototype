define('ember-osf/utils/auth', ['exports', 'ember-get-config'], function (exports, _emberGetConfig) {
    'use strict';

    var _slicedToArray = (function () {
        function sliceIterator(arr, i) {
            var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;_e = err;
            } finally {
                try {
                    if (!_n && _i['return']) _i['return']();
                } finally {
                    if (_d) throw _e;
                }
            }return _arr;
        }return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
        };
    })();

    exports.getAuthUrl = getAuthUrl;
    exports.getTokenFromHash = getTokenFromHash;

    // jscs:disable disallowArrayDestructuringReturn

    function getAuthUrl() {
        return _emberGetConfig['default'].OSF.authUrl + '?response_type=token&scope=' + _emberGetConfig['default'].OSF.scope + '&client_id=' + _emberGetConfig['default'].OSF.clientId + '&redirect_uri=' + encodeURI(_emberGetConfig['default'].OSF.redirectUri);
    }

    function getTokenFromHash(hash) {
        hash = hash.substring(1).split('&');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = hash[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var chunk = _step.value;

                var _chunk$split = chunk.split('=');

                var _chunk$split2 = _slicedToArray(_chunk$split, 2);

                var key = _chunk$split2[0];
                var value = _chunk$split2[1];

                if (key === 'access_token') {
                    return value;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return null;
    }
});