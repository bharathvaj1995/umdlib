
  // -- Public -----------------------------------------------------------------

  /**
   * Initializes the object.
   * (Pseudoclassical Instantiation Pattern)
   *
   * @constructor (arg1)
   * @public
   * @param {String}      argument to be saved as an object variable,
   * @returns {}          -,
   * @throws {Object}     throws an error if the object isn't created by caller,
   * @since 0.0.0
   */
  UMDLib = function(name) {
    if (!(this instanceof UMDLib)) {
      throw new Error('UMDLib needs to be called with the new keyword!');
    }
    this.name = name;
  };

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousUMDLib = root.UMDLib;

  // Runs UMDLib in noConflict mode, returning the UMDLib variable to its
  // previous owner. Returns a reference to this UMDLib object.
  /* istanbul ignore next */
  /* eslint-disable no-param-reassign */
  UMDLib.noConflict = function() {
    root.UMDLib = previousUMDLib;
    return this;
  };
  /* eslint-enable no-param-reassign */

  // Current version of the library:
  UMDLib.VERSION = '{{lib:version}}';


  // -- Public methods ---------------------------------------------------------

  UMDLib.prototype = {

    /**
     * Returns a string.
     *
     * @method ()
     * @public
     * @param {}           -,
     * @returns {String}   returns a string,
     * @since 0.0.0
     */
    getString: function() {
      return 'I am a string!';
    },

    /**
     * Returns an array.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Array}   returns an array,
     * @since 0.0.0
     */
    getArray: function() {
      return [1, 2, 3];
    }
  };