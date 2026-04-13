import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useQuickView } from "../../Context/QuickViewContext";
import "./QuickViewModal.css";

const QuickViewModal = () => {
  const { isOpen, product, closeQuickView } = useQuickView();

  // Safety
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.images?.main);

  // Reset image when product changes
  useEffect(() => {
    setActiveImage(product.images?.main);
  }, [product]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="qv-modal" onClose={closeQuickView}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="qv-fade-enter"
          enterFrom="qv-fade-from"
          enterTo="qv-fade-to"
          leave="qv-fade-leave"
          leaveFrom="qv-fade-to"
          leaveTo="qv-fade-from"
        >
          <div className="qv-backdrop" />
        </Transition.Child>

        {/* Wrapper */}
        <div className="qv-wrapper">
          <Transition.Child
            as={Fragment}
            enter="qv-scale-enter"
            enterFrom="qv-scale-from"
            enterTo="qv-scale-to"
            leave="qv-scale-leave"
            leaveFrom="qv-scale-to"
            leaveTo="qv-scale-from"
          >
            <Dialog.Panel className="qv-panel">
              {/* Close */}
              <button
                className="qv-close"
                onClick={closeQuickView}
                aria-label="Close quick view"
              >
                <IoClose size={26} />
              </button>

              <div className="qv-content">
                {/* LEFT: Image + Gallery */}
                <div className="qv-image">
                  <img src={activeImage} alt={product.name || product.title} />

                  {product.images?.gallery?.length > 1 && (
                    <div className="qv-thumbnails">
                      {product.images.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          className={`qv-thumb ${
                            activeImage === img ? "active" : ""
                          }`}
                          onClick={() => setActiveImage(img)}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* RIGHT: Info */}
                <div className="qv-info">
                  <Dialog.Title className="qv-title">
                    {product.name || product.title}
                  </Dialog.Title>

                  {/* Specifications */}
                  {product.specifications && (
                    <div className="qv-specs">
                      <h4>Product Specifications</h4>
                      <table>
                        <tbody>
                          {Object.entries(product.specifications).map(
                            ([key, value]) => (
                              <tr key={key}>
                                <td>{key}</td>
                                <td>{value}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="qv-actions">
                    <Link
                      to={`/product/${product.category}/${product.slug}`}
                      className="qv-view-details"
                      onClick={closeQuickView}
                    >
                      View Full Details
                    </Link>

                    <button className="qv-close-btn" onClick={closeQuickView}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default QuickViewModal;
