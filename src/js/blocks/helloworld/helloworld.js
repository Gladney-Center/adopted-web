const { registerBlockType } = wp.blocks,
    { PlainText } = wp.editor

registerBlockType('adpt/helloworld',{
    title: 'AdoptED Hello World',
    description: 'A basic ass block for testing purposes',
    icon: 'media-code',
    category: 'layout',
    edit({className, attributes, setAttributes}) {
        return false
    },
    save(){}
})