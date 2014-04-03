

.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. ==================================================
.. DEFINE SOME TEXTROLES
.. --------------------------------------------------
.. role::   underline
.. role::   typoscript(code)
.. role::   ts(typoscript)
   :class:  typoscript
.. role::   php(code)


Reference
^^^^^^^^^

.. ### BEGIN~OF~TABLE ###

.. container:: table-row

   Property
         Property:

   Data type
         Data type:

   Description
         Description:

   Default
         Default:


.. container:: table-row

   Property
         resolutionConfigs

   Data type
         array

   Description
         Configuration for image resolutions. You can define the resolutions of
         thumbnails, lightbox images etc. here.

         A resolution configuration can consist of any parameter that the TYPO3
         IMAGE type provides, including image manipulation via GIFBUILDER.

   Default
         ::

            thumb {
               maxW = 150
               maxH = 150
            }
            galleryThumb {
               maxW = 150
               maxH = 150
            }
            albumThumb {
               maxW = 150
               maxH = 150
            }
            lightbox {
               maxW = {$styles.content.imgtext.linkWrap.width}
            }



.. container:: table-row

   Property
         includeCSS.yag\_theme\_magnificpopup\_style

   Data type
         file

   Description
         Path to the css that styles the frontend-output of yag.

   Default
         EXT:yag\_theme\_magnificpopup/Resources/Public/CSS/styles.css


.. ###### END~OF~TABLE ######

[tsref:plugin.tx\_yag.settings.themes.magnificPopup]

For more configurations see file
EXT:yag\_theme\_magnificpopup/Configuration/Typoscript/setup.txt and
use the TypoScript-Objekt-Browser.

