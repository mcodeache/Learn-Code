package humanBody;

public class Male implements HumanDigestion {

    public void mouth() {
        System.out.println(" food enters the digestive system");
    }

    public void esophagus() {
        System.out.println("esophagus moves food down to the stomach ");
    }

    public void stomach() {
        System.out.println("Stomach stores and breaks down food ");
    }

    public void smallIntestine() {
        System.out.println("digestion and absorption of nutrients takes place");
    }

    public void largeIntestine() {
        System.out.println("Large Intestine absorbs water and electrolytes from the remaining chyme and forms stool");
    }

    public void anus() {
        System.out.println("stool is expelled from the body");
    }
}
