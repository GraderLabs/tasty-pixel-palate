
import { Layout } from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SettingsPage = () => {
  return (
    <Layout>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-0.5">
          <h1 className="text-3xl font-bold font-inter">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
        
        <Separator />
        
        <Tabs defaultValue="account" className="space-y-6">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter">Profile</h2>
              <p className="text-muted-foreground">Update your personal information.</p>
            </div>
            
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save changes</Button>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter">Password</h2>
              <p className="text-muted-foreground">Change your password.</p>
            </div>
            
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Update password</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter">Appearance</h2>
              <p className="text-muted-foreground">Customize the look and feel of the application.</p>
            </div>
            
            <div className="grid gap-4 py-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Theme</Label>
                  <p className="text-sm text-muted-foreground">Switch between light and dark mode.</p>
                </div>
                <ThemeToggle />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="font-size">Font Size</Label>
                  <p className="text-sm text-muted-foreground">Adjust the font size across the application.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">A</span>
                  <Input id="font-size" type="range" className="w-32" />
                  <span className="text-base">A</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-inter">Notification Settings</h2>
              <p className="text-muted-foreground">Manage how you receive notifications.</p>
            </div>
            
            <div className="grid gap-4 py-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email notifications about new recipes and updates.</p>
                </div>
                <Switch id="email-notifications" />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications on your device.</p>
                </div>
                <Switch id="push-notifications" />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="newsletter">Newsletter</Label>
                  <p className="text-sm text-muted-foreground">Subscribe to our weekly newsletter with new recipes.</p>
                </div>
                <Switch id="newsletter" />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save preferences</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SettingsPage;
