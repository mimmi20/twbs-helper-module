<?php

namespace TwbsHelper\Form\View\Helper;

class FormCheckbox extends \Zend\Form\View\Helper\FormCheckbox
{
    use \TwbsHelper\View\Helper\ClassAttributeTrait;

    /**
     * Render a form <checkbox> element from the provided $oElement
     *
     * @param \Zend\Form\ElementInterface $oElement
     * @return string
     */
    public function render(\Zend\Form\ElementInterface $oElement): string
    {
        $oElement->setAttributes($this->setClassesToAttributes(
            $oElement->getAttributes() ?? [],
            ['form-check-input'],
            ['form-control']
        ));
        return parent::render($oElement);
    }
}